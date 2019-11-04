# PostgreSQL

## Table of Contents

- [PostgreSQL](#postgresql)
  - [Table of Contents](#table-of-contents)
  - [References](#references)
  - [Analyze query performance](#analyze-query-performance)
  - [Run commands as postgres without switching user](#run-commands-as-postgres-without-switching-user)
  - [Change password for postgresql db user](#change-password-for-postgresql-db-user)
  - [Shift timestamps by certain intervals in query](#shift-timestamps-by-certain-intervals-in-query)
  - [Check the size of a table in disk](#check-the-size-of-a-table-in-disk)

## References

- [PostgreSQL 10 official documentation](https://www.postgresql.org/docs/10/static/index.html)

## Analyze query performance

Command:

```sql
EXPLAIN ANALYZE select * from answers limit 10;
```

Next, paste the output of above into [https://explain.depesz.com](https://explain.depesz.com) to get a formatted explanation.

## Run commands as postgres without switching user

- `su - postgres -c "psql DBNAME USERNAME"`
- `sudo -u postgres psql DBNAME USERNAME`

## Change password for postgresql db user

**Note**: not to be confused with changing password for the postges linux user

- ensure that the line in `pg_hba.conf` with TYPE=local and USER=postgres has METHOD set to 'md5'

- restart PostgreSQL

- `sudo -u postgres psql`

- `ALTER USER postgres PASSWORD 'MY_NEW_PASSWORD';`

- exit the psql command line interface

- restore `pg_hba.conf` to initial state

## Shift timestamps by certain intervals in query

QUERY => select created_at + (330 \* interval '1 minute') as time_in_ist;
EXPLANATION => This will take UTC timestamp and convert it into IST.

## Check the size of a table in disk

SELECT pg_size_pretty( pg_database_size('dbname') );

SELECT pg_size_pretty( pg_total_relation_size('tablename') );

select pg_relation_size('answers', 'main') as main, pg_relation_size('answers', 'fsm') as fsm, pg_relation_size('answers', 'vm') as vm, pg_relation_size('answers', 'init') as init, pg_table_size('answers'), pg_indexes_size('answers') as indexes, pg_total_relation_size('answers') as total;
