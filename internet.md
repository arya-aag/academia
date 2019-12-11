# Internet

- [Internet](#internet)
  - [DNS](#dns)
  - [TCP/IP](#tcpip)
  - [Sockets](#sockets)

## DNS

The 8 steps in a DNS lookup:

1. A user types ‘example.com’ into a web browser and the query travels into the Internet and is received by a DNS recursive resolver.
2. The resolver then queries a DNS root nameserver (.).
3. The root server then responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as .com or .net), which stores the information for its domains. When searching for example.com, our request is pointed toward the .com TLD.
4. The resolver then makes a request to the .com TLD.
5. The TLD server then responds with the IP address of the domain’s nameserver, example.com.
6. Lastly, the recursive resolver sends a query to the domain’s nameserver.
7. The IP address for example.com is then returned to the resolver from the nameserver.
8. The DNS resolver then responds to the web browser with the IP address of the domain requested initially.
9. The browser makes a HTTP request to the IP address.
10. The server at that IP returns the webpage to be rendered in the browser (step 10).

## TCP/IP

**Note**: Improve this!

1. Application layer (http, https, ssh, ftp etc)
2. Transport Layer (tcp, udp)
3. Internet layer (ip)
4. Network layer/data link layer (actual software to hardware connection)

## Sockets
