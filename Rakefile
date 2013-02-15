require "bundler/setup"

desc "Build the website"
task :build do
  system "bundle exec middleman build"
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

  system "bundle exec middleman build"

  Dir.chdir "site" do
    # File.open("CNAME", "w") do |file|
    #   file.puts "emblemjs.com"
    # end

    unless File.exist?(".git")
      system "git init"
      system "git remote add github https://github.com/machty/emblem-site.git"
    end

    system "git fetch github"
    system "git add -A"
    system "git commit -m '#{message.gsub("'", "\\'")}'"
    system "git rebase github/gh-pages"
    system "git push github master:gh-pages"
  end
end

