# Rails (Ruby on Rails)

## Table of Contents

- [References](#references)
- [Generate new Rails App](#generate-new-rails-app)
- [Validations in Models](#validations-in-models)
- [Run server in specific port](#run-server-in-specific-port)

## query inside json fields

DictionaryWord.where(category: :h2e).where("(content ->> 'transliteration') is NULL")

## execute custom query

Problem:
select IDs of questions where no answer that is more than a week old has view count more than 100

ActiveRecord:

```ruby
Question.joins('join (select question_id, count(id) as ans_count from answers where views_count < 100 and created_at < current_date - interval \'7\' day group by question_id) a on "questions"."id" = "a"."question_id" where answers_count = "a"."ans_count" ').pluck(:id)
```

Query that was fired:

```sql
SELECT "questions"."id" FROM "questions" join (select question_id, count(id) as ans_count from answers where views_count < 100 and created_at < current_date - interval '7' day group by question_id) a on "questions"."id" = "a"."question_id" where answers_count = "a"."ans_count"
```

## select from inside jsonb column

```ruby
InboxMessage.pluck("details::json -> 'identifier'")
```

## query inside jsonb column

```ruby
DictionaryWord.where("content ->> 'word' = 'fidelity'")
```

(in case of boolean values also) `Question.where("additional_info ->> 'image_only' = 'true'").last`

## sum of numbers in jsonb column

```ruby
Question.where(id: [1,2]).pluck(:additional_info)
=> SELECT "questions"."additional_info" FROM "questions" WHERE "questions"."id" IN (1, 2)
=> [{"a"=>13}, {"a"=>12}]

Question.where(id: [1,2]).sum("(additional_info::json ->> 'a')::int")
=> SELECT SUM((additional_info::json ->> 'a')::int) FROM "questions" WHERE "questions"."id" IN (1, 2)
=> 25
```
