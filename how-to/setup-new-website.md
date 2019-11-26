# Setup a new Website

## Contents

- [Setup a new Website](#setup-a-new-website)
  - [Contents](#contents)
  - [Step by step guide](#step-by-step-guide)
    - [Procure server](#procure-server)
    - [Procure domain name](#procure-domain-name)
    - [Change existing nameserver to preferred one](#change-existing-nameserver-to-preferred-one)
    - [Point to correct server's public IP address](#point-to-correct-servers-public-ip-address)
    - [Setup basic nginx and dummy website](#setup-basic-nginx-and-dummy-website)
    - [Setup ssl encryption in nameserver site](#setup-ssl-encryption-in-nameserver-site)
    - [Download certificates from nameserver site and store in own server](#download-certificates-from-nameserver-site-and-store-in-own-server)
    - [Add ssl lines to nginx](#add-ssl-lines-to-nginx)

## Step by step guide

### Procure server

Note: PENDING

### Procure domain name

- Buy a domain from a domain registrars
- The steps below are for [godaddy.com](godaddy.com)

### Change existing nameserver to preferred one

- In godaddy's website, for the registered domain, go into `DNS Management`
- Under the `Nameservers` section, change from using the default nameservers to using a more preferable one
- In our case, we will switch to using CloudFlare
- In cloudflare, click on "Add site" and enter your domain
- It will retieve the existing dns records
- Click proceed and you'll find the cloudflare nameservers
- Login to godaddy account and replace their nameservers with ones provided by cloudflare

### Point to correct server's public IP address

### Setup basic nginx and dummy website

To check initial connectivity

```conf
server {
    listen 80;
    server_name example.com www.example.com;
    root /home/ubuntu/example.website;
    index index.html index.htm;
}
```

### Setup ssl encryption in nameserver site

### Download certificates from nameserver site and store in own server

### Add ssl lines to nginx

```conf
server {
    listen                  80;
    listen                  443;
    ssl                     on;
    server_name             example.com www.example.com;
    root                    /home/ubuntu/example.website;
    index                   index.html index.htm;
    ssl_certificate         /home/ubuntu/something/something_cert.pem;
    ssl_certificate_key     /home/ubuntu/something/something_cert.key;
}
```
