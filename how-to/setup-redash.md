# Setup Redash

## Table of Contents

- [Setup Redash](#setup-redash)
  - [Table of Contents](#table-of-contents)
  - [Steps](#steps)
  - [Future Scope](#future-scope)

## Steps

- [Open Source & Self Hosted Redash Instance](https://redash.io/help/open-source/setup#setup-redash-instance-setup)

- While creating, allow all incoming connections to 22, 80 & 443.

- Add DNS record in CloudFlare pointing to public IPv4 of redash instance.

- Access `redash.example.com`

- Create admin account

- Add data source > PostgreSQL

  ```bash
  Name > something
  Host > 12.123.44.123 (public IP of server hosting postgres DB)
  Port > 5432
  User > db_user
  Password > db_user_password
  SSL Mode > prefer
  Database Name > db_database_name (preferably replica instance)
  ```

- `Connection Test Failed: could not send SSL negotiation packet: Resource temporarily unavailable`

- Allow incoming connection on 5432 port of postgres hosting server in aws console from the public ip (port 32) of redash hosting machine

- `Connection Test Failed: FATAL: no pg_hba.conf entry for host "13.233.137.57", user "metabase_pb", database "pagarbook_backup_analytics", SSL off`

- Add row in pg_hba.conf under IPv4 section from redash instance IP (port 32)

- Open psql with `sudo -u postgres psql` and run `SELECT pg_reload_conf();` to reload pg_hba.conf settings

- `Connection done`

## Future Scope

- [HTTPS Setup](https://gist.github.com/arikfr/64c9ff8d2f2b703d4e44fe9e45a7730e)

- [HTTPS Setup Redirect Issue](https://github.com/getredash/redash/issues/1372)

- OAUTH

- MAIL SERVER
