# Linux

## Table of Contents

- [Run commands as postgres without switching user](#run-commands-as-postgres-without-switching-user)
- [Change password for postgresql db user](#change-password-for-postgresql-db-user)
- [References](#references)

### Run commands as postgres without switching user

- `su - postgres -c "psql DBNAME USERNAME"`
- `sudo -u postgres psql DBNAME USERNAME`

### Change password for postgresql db user

**Note**: not to be confused with changing password for the postges linux user

- ensure that the line in `pg_hba.conf` with TYPE=local and USER=postgres has METHOD set to 'md5'

- restart PostgreSQL

- `sudo -u postgres psql`

- `ALTER USER postgres PASSWORD 'MY_NEW_PASSWORD';`

- exit the psql command line interface

- restore `pg_hba.conf` to initial state

### References

- [PostgreSQL 10 official documentation](https://www.postgresql.org/docs/10/static/index.html)
