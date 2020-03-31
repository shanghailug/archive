#!/usr/bin/env ruby

require 'fileutils'
require 'magic'
require 'nokogiri'
require 'pathname'
require 'uri'
require 'prettyprint'


def is_html_or_xml(path)
  mime = Magic.guess_file_mime_type(path)

  if (mime != "text/html") && (mime != "text/xml") && (path.extname != '.html')
    return false
  end

  ext = Pathname(path.basename.to_s.sub(/\?.*/, '')).extname

  # NOTE: sometimes '.js' or '.css' will recognized as html by 'Magic'
  if (ext == '.js') || (ext == '.css')
    #puts "#{path}: js or css, skip"
    return false
  end

  return true
end

def url_unescape(p)
  u = p
  u.gsub!('%3F', '?')
  u.gsub!('%26', '&')
  u.gsub!('%23', '#')

  u
end

# return nil if not in site, fp is Pathname or current file
def in_site_path(fp, url)
  u = url

  return nil if u =~ /^irc:/
  return nil if u =~ /^mailto:/

  # substitute domain
  u.sub!(%r!^https?://(www\.)?shlug\.org[/]?!, '/')

  return nil if u =~ /^https?:/

  # fix '?' & '&'
  u.gsub!(/\?/, '%3F')
  u.gsub!(/&/, '%26')

  # fix absolute path
  if Pathname(u).relative?
    p1 = fp.dirname + Pathname(u)
  else
    p1 = Pathname(u).relative_path_from('/')
  end

  # generate new relative path
  #p1.relative_path_from($target_dir).to_s
  #puts " >>> #{p1}"

  return p1
end

$fix_mime_path = {}

def fix_mime(path, doc, xpath, attr, ext)
  res = {}

  #puts "  -> #{path}: fix mime <#{xpath}> "
  doc.xpath(xpath).each do |tag|
    next unless tag[attr]

    url0 = tag[attr]
    p = in_site_path(path, url0)

    next unless p

    if Pathname(url0).extname != ext
      p1 = p.to_s + ext
      tag[attr] = url0 + ext

      res[url_unescape(p.to_s)] = url_unescape(p1)
    end
  end

  res
end

$res = {}
puts "collect all js/css"
Dir.glob('**/*') do |str|
  p = Pathname(str).cleanpath
  next if p.directory?
  next unless is_html_or_xml(p)

  doc = Nokogiri::HTML(File.read(p))

  doc.xpath('//link[@rel="stylesheet"]').each do |t|
    next unless t['href']
    p1 = in_site_path(p, t['href'])
    next unless p1
    t = url_unescape(p1.cleanpath.to_s)
    $res[t] = true
    $res[t + "/index.html"] = true
  end

  doc.xpath('//script').each do |t|
    next unless t['src']
    p1 = in_site_path(p, t['src'])
    next unless p1
    t = url_unescape(p1.cleanpath.to_s)
    $res[t] = true
    $res[t + "/index.html"] = true
  end
end

#puts $res.keys

puts "add js/css extname to fix mime type"
Dir.glob('**/*') do |str|
  p = Pathname(str)
  next if p.directory?
  next unless is_html_or_xml(p)
  next if $res[p.cleanpath.to_s]

  puts " ---- #{p}"

  doc = Nokogiri::HTML(File.read(p))

  inc = fix_mime(p, doc, '//link[@rel="stylesheet"]', "href", ".css")
  inc.merge!(fix_mime(p, doc, '//script', "src", ".js"))

  $fix_mime_path.merge!(inc)

  File.write(p, doc.to_html)
end

$fix_mime_path.each do |old, curr|
  next if Pathname(curr).exist?

  if Pathname(old).file?
    FileUtils.mv(old, curr)
    puts "  --> mv #{old}"
    next
  end

  src = old + "/index.html"

  if Pathname(src).file?
    FileUtils.mv(src, curr)
    puts "  --> mv #{src}"
    begin
      Dir.rmdir(old)
    rescue Exception => e
    end
  end
end


puts "fix all in site links"

def fix_link(target_dir, path, doc, tag, attr)
  doc.xpath("//#{tag}").each do |tag|
    next unless tag[attr]

    url0 = tag[attr]
    p = in_site_path(path, url0)

    next unless p

    url1 = p.relative_path_from(target_dir).to_s
    #puts "    --> #{target_dir} #{p} #{url1}"

    # workaroud for github page url rewrite
    # without trail '/', github will
    # rewrite '/%3Fxxx' to '/?xxx', not '/%3Fxxx/index.html'
    url1 += "/" if Pathname(url_unescape(p.to_s)).directory?

    tag[attr] = url1
  end
end

Dir.glob('**/*') do |str|
  p = Pathname(str)
  next if p.directory?
  next unless is_html_or_xml(p)
  next if $res[p.cleanpath.to_s]

  puts "  -> #{p}"
  doc = Nokogiri::HTML(File.read(p))

  target_dir = p.dirname
  target_file = p
  if (p.extname != ".html") &&
     (p.extname != ".htm") &&
     (p.extname != ".xml")
    # here, we only consider html
    target_dir = p
    target_file = p + "index.html"

    puts "    -> need fix for html mime type"
  end

  fix_link(target_dir, p, doc, 'a', 'href')
  fix_link(target_dir, p, doc, 'link', 'href')
  fix_link(target_dir, p, doc, 'script', 'src')
  fix_link(target_dir, p, doc, 'img', 'src')
  fix_link(target_dir, p, doc, 'iframe', 'src')

  File.unlink(p)
  FileUtils.mkdir_p target_dir
  File.write(target_file, doc.to_html)
end
