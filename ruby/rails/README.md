# Rails (Ruby on Rails)

## Table of Contents

- [References](#references)
- [Generate new Rails App](#generate-new-rails-app)
- [Validations in Models](#validations-in-models)
- [Run server in specific port](#run-server-in-specific-port)

### References:

- [www.techcareerbooster.com : ruby-on-rails-architecture-overview-for-beginners](https://www.techcareerbooster.com/blog/ruby-on-rails-architecture-overview-for-beginners)

### Validations in Models

```ruby
class Article < ApplicationRecord
    validates :title, presence: true
    validates :desc, presence: true, length: { minimum: 10, maximum: 200 }
end
```

[Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html)

### Generate new Rails App

- Using default (sqlite): `rails new myapp`

- Using specific db:

  `rails new myapp -d postgresql` or `rails new myapp -d mysql`

### Run server in specific port

(5.0) : `rails server -p PORT_NUMBER`

### Generate migrations

`rails generate migration CreateArticles title:string desc:text`

```ruby
create_table :articles do |t|
    t.string :title
    t.text :desc
end
```

[Official Documentation](https://guides.rubyonrails.org/active_record_migrations.html)
