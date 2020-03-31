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
  URI.unescape(p)
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

def check_404(path, doc, xpath, attr)
  res = {}

  doc.xpath(xpath).each do |t|
    next unless t[attr]

    p1 = in_site_path(path, t[attr])
    next unless p1
    if p1
      t = url_unescape(p1.cleanpath.to_s)
      next if Pathname(t).file?
      next if (Pathname(t) + "index.html").file?

      res[t] = true
    end
  end

  res
end

$res = { :css => {}, :js => {}, :img => {}, :a => {} }

Dir.glob('**/*') do |str|
  p = Pathname(str).cleanpath
  next if p.directory?
  next unless is_html_or_xml(p)

  doc = Nokogiri::HTML(File.read(p))

  $res[:css].merge!(check_404(p, doc, '//link[@rel="stylesheet"]', 'href'))
  $res[:js].merge!(check_404(p, doc, '//script', 'src'))

  $res[:img].merge!(check_404(p, doc, '//img', 'src'))

  $res[:a].merge!(check_404(p, doc, '//iframe', 'src'))
  $res[:a].merge!(check_404(p, doc, '//a', 'href'))
end

$res.each do |k, v|
  puts "## #{k}"
  v.keys.each {|x| puts x }
end
