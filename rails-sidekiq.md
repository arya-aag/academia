# Rails (Ruby on Rails)

## Table of Contents

- [Rails (Ruby on Rails)](#rails-ruby-on-rails)
  - [Table of Contents](#table-of-contents)
  - [References](#references)
  - [Common commands](#common-commands)

## References

- [www.techcareerbooster.com : ruby-on-rails-architecture-overview-for-beginners](https://www.techcareerbooster.com/blog/ruby-on-rails-architecture-overview-for-beginners)

## Common commands

```ruby
# run sidekiq locally and specify log file
bundle exec sidekiq -L log/sidekiq.log

# use in rails console
require 'sidekiq/api'
q = Sidekiq::ScheduledSet.new
qr = Sidekiq::RetrySet.new

# get jobs count
q.count

# delete particular job
job = q.find_job("63b9f090a256b27a86835ff0")
job.delete

# delete all jobs
q.clear
qr.clear

# find jobs by class name
q = Sidekiq::ScheduledSet.new
q.select { |j| j.klass == "GratifyPostApproveWorker" }.count

# get all queues
Sidekiq::Queue.all

# get a queue

queue = Sidekiq::Queue.new # the "default" queue
queue = Sidekiq::Queue.new("mailer")

# get the number of jobs within a queue.
queue.size # => 4
```
