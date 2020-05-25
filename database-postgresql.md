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
  - [Backup and Restore](#backup-and-restore)
  - [Users and Roles](#users-and-roles)
  - [Grant read/write access on tables/schemas](#grant-readwrite-access-on-tablesschemas)
  - [Find path of pg_hba.conf file](#find-path-of-pg_hbaconf-file)

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

**Note**: not to be confused with changing password for the postgres linux user

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

```sql
SELECT pg_size_pretty( pg_database_size('dbname') );

SELECT pg_size_pretty( pg_total_relation_size('tablename') );

select pg_relation_size('answers', 'main') as main, pg_relation_size('answers', 'fsm') as fsm, pg_relation_size('answers', 'vm') as vm, pg_relation_size('answers', 'init') as init, pg_table_size('answers'), pg_indexes_size('answers') as indexes, pg_total_relation_size('answers') as total;
```

## Backup and Restore

```bash
sudo -u postgres pg_dump -f /home/ubuntu/backups/local.db -Fc -d db_name --exclude-table=table_name

sudo -u postgres createdb restore_db_name

sudo -u postgres pg_restore -d restore_db_name -O ./local.db
```

## Users and Roles

```sql
CREATE ROLE abcdefgh;
CREATE USER arya WITH PASSWORD 'arya12345' WITH ROLE abcdefgh;
CREATE USER arya WITH PASSWORD 'arya12345' IN GROUP dbreadaccess;

```

## Grant read/write access on tables/schemas

```sql

GRANT SELECT ON "table_name" TO db_user_name;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO db_user_name;

SELECT table_catalog, table_schema, table_name, privilege_type FROM information_schema.table_privileges WHERE grantee = 'db_user_name';
```

## Find path of pg_hba.conf file

```sql
sudo -u postgres psql -t -P format=unaligned -c 'show hba_file';
```
