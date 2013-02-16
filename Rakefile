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
  require "highline/import"
  message = ask("Provide a deployment message:  ") do |q|
    q.validate = /\w/
    q.responses[:not_valid] = "Can't be empty."
  end

  deploy_cmd "bundle exec middleman build"

  Dir.chdir "build" do
    File.open("CNAME", "w") do |file|
      file.puts "emblemjs.com"
    end

    unless File.exist?(".git")
      deploy_cmd "git init"
      deploy_cmd "git remote add github git@github.com:machty/emblem-site.git"
    end

    deploy_cmd "git fetch github"
    deploy_cmd "git add -A"
    deploy_cmd "git commit -m '#{message.gsub("'", "\\'")}'"
    deploy_cmd "git rebase github/gh-pages"
    deploy_cmd "git push github master:gh-pages"
  end
end

