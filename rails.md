# Rails (Ruby on Rails)

## Table of Contents

- [Rails (Ruby on Rails)](#rails-ruby-on-rails)
  - [Table of Contents](#table-of-contents)
  - [References](#references)
  - [validations in models](#validations-in-models)
  - [generate new rails app](#generate-new-rails-app)
  - [run server in specific port](#run-server-in-specific-port)
  - [migrations](#migrations)
    - [run or rollback specific migration](#run-or-rollback-specific-migration)
  - [count VS length VS size](#count-vs-length-vs-size)
  - [drop and recreate test database](#drop-and-recreate-test-database)

## References

- [www.techcareerbooster.com : ruby-on-rails-architecture-overview-for-beginners](https://www.techcareerbooster.com/blog/ruby-on-rails-architecture-overview-for-beginners)

## validations in models

```ruby
class Article < ApplicationRecord
    validates :title, presence: true
    validates :desc, presence: true, length: { minimum: 10, maximum: 200 }
end
```

[Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html)

## generate new rails app

- Using default (sqlite): `rails new myapp`

- Using specific db:

  `rails new myapp -d postgresql` or `rails new myapp -d mysql`

## run server in specific port

(5.0) : `rails server -p PORT_NUMBER`

## migrations

[Official Documentation](https://guides.rubyonrails.org/active_record_migrations.html)

`rails generate migration create_articles title:string desc:text`

```ruby
create_table :articles do |t|
    t.string :title
    t.text :desc
end
```

### run or rollback specific migration

```ruby
rails db:migrate VERSION=20100905201547
rails db:migrate:down VERSION=20100905201547
```

## count VS length VS size

length

- will load all your objects just to count them; something like: "select \* from addresses"
- then return the results count. As you can imagine - it's bad performance

count

- will just issue a "select count( \* ) from addresses"

size

- is smarter
- it'll check if the association is already loaded and if true then return the length (without issuing a call to the database)
- also checks for counter_cache if you have a field named address_count in your user model, then size will use this field for the count, so there is no need to issue a count on the addresses table
- if all fails, size will issue a select count( \* ) on the database

## drop and recreate test database

```ruby
bin/rails db:environment:set RAILS_ENV=test
rails db:drop db:create db:migrate RAILS_ENV=test
```
