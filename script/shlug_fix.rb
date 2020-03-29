#!/usr/bin/env ruby

require 'fileutils'
require 'magic'
require 'nokogiri'
require 'pathname'
require 'uri'

path = Pathname(ARGV[0])

mime = Magic.guess_file_mime_type(path)

if (mime != "text/html") && (mime != "text/xml") && (path.extname != '.html')
  puts "#{path}: non html or xml file, skip"
  exit
end

$target_dir = path.dirname
$src_dir = path.dirname
$src_file = path
$target_file = path

puts "#{path}: try fix"

if (path.extname != ".html") &&
   (path.extname != ".htm") &&
   (path.extname != ".xml")
  # here, we only consider html
  $target_dir = path
  $target_file = path + "index.html"

  puts "  -> need fix for html mime type"
end

puts "  -> src_dir: #{$src_dir}"
puts "  -> target_dir: #{$target_dir}"
puts "  -> target_file: #{$target_file}"

def fix_path(path)
  p = path

  return p if p =~ /^irc:/
  return p if p =~ /^mailto:/

  # substitute domain
  p.sub!(%r!^https?://(www\.)?shlug\.org[/]?!, '/')

  return p if p =~ /^https?:/

  # fix '?' & '&'
  p.gsub!(/\?/, '%3F')
  p.gsub!(/&/, '%26')
  p.gsub!(/#/, '%23')

  # fix absolute path
  if Pathname(p).relative?
    p1 = $src_dir + Pathname(p)
  else
    p1 = Pathname(p).relative_path_from('/')
  end

  # generate new relative path
  p1.relative_path_from($target_dir).to_s
end

doc = Nokogiri::HTML(File.read(path))

def fix(doc, tag, attr)
  puts "  -> fix <#{tag}>"
  doc.xpath("//#{tag}").each do |tag|
    next unless tag[attr]

    url0 = tag[attr]
    url1 = fix_path(url0)

    next if url0 == url1

    puts "    - #{url0} -> #{url1}"

    tag[attr] = url1
  end
end

fix(doc, 'a', 'href')
fix(doc, 'link', 'href')
fix(doc, 'script', 'src')
fix(doc, 'img', 'src')
fix(doc, 'iframe', 'src')

File.unlink($src_file)
FileUtils.mkdir_p $target_dir
File.write($target_file, doc.to_html)
