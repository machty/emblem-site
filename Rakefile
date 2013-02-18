require "bundler/setup"
require 'fileutils'

def deploy_cmd(cmd)
  puts "CMD: #{cmd}"
  system cmd
end

desc "Build the website"
task :build do
  deploy_cmd "bundle exec middleman build"
end

task :man do
  # @TODO
end

desc "Deploy the website to github pages"
task :deploy do |t, args|
  message = "deploying #{Time.now.strftime('%b %e, %l:%M %p')}"
  puts message

  FileUtils.rm_rf("./build")
  deploy_cmd "bundle exec middleman build"
  Dir.chdir "build" do
    File.open("CNAME", "w") do |file|
      file.puts "emblemjs.com"
    end

    deploy_cmd "git init"
    deploy_cmd "git remote add github git@github.com:machty/emblem-site.git"

    deploy_cmd "git add -A"
    deploy_cmd "git commit -m '#{message.gsub("'", "\\'")}'"
    deploy_cmd "git push --force github master:gh-pages"
  end
end

