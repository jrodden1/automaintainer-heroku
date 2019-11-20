namespace:start do 
   task :development do
      exec 'cd .. && heroku local -f Procfile.dev'
   end
end

desc 'Start Development Servers (Backend and Frontend)'
task :start => 'start:development'