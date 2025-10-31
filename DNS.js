// DNS (Domain Name System) is a hierarchical system for naming resources on the internet. It translates human-readable domain names (like www.example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other on the network.
// https://www.cloudflare.com/learning/dns/what-is-dns/

// How DNS Works:
// 1. A user types a domain name into their web browser.
// 2. The browser checks its cache to see if it has recently resolved the domain name.
// 3. If not found in cache, the browser sends a DNS query to a recursive DNS resolver (usually provided by the user's ISP).
// 4. The recursive resolver checks its cache. If not found, it queries the root DNS servers.
// 5. The root servers respond with the address of the TLD (Top-Level Domain) DNS servers (e.g., .com, .org).
// 6. The recursive resolver then queries the TLD servers, which respond with the authoritative DNS servers for the specific domain.
// 7. The recursive resolver queries the authoritative DNS servers, which respond with the IP address associated with the domain name.
// 8. The recursive resolver returns the IP address to the user's browser.
// 9. The browser can now connect to the web server using the IP address and load the website.

// https -> Hypertext Transfer Protocol Secure
// www -> World Wide Web (Top Level Domain)
// cloudflare.com -> Domain name
// /learning/dns/what-is-dns/ -> Path to specific resource on the server

// Types of DNS Records:
// A -> Address record: Maps a domain name to an IPv4 address.
// AAAA -> IPv6 Address record: Maps a domain name to an IPv6 address.
// CNAME -> Canonical Name record: Maps a domain name to another domain name (alias).
// MX -> Mail Exchange record: Maps a domain name to an email server (mail exchange).
// NS -> Name Server record: Maps a domain name to a DNS server.
// PTR -> Pointer record: Maps an IP address to a domain name.

/***/

/*
 =========================================
 == 
 ==  NOTES: How DNS Works (The Basics)
 ==
 =========================================

 What is DNS?
 
 - DNS stands for "Domain Name System".
 - Its main job is to be the "Phonebook of the Internet".
 - It translates human-friendly website names (like "google.com") into
   computer-friendly IP addresses (like "172.217.14.228").
 
 Why do we need it?
 
 - We remember names. Computers find each other using numbers (IP addresses).
 - DNS is the system that bridges this gap so you don't have to
   memorize long strings of numbers for every website.

 =========================================
 == 
 ==  The 4 Servers in a DNS Lookup
 ==
 =========================================

 When you look up a website, four types of servers work together.
 Think of it as asking a series of experts to find a specific piece of info.

 1. Recursive Resolver (The Librarian):
 
   - This is the server your computer contacts first.
   - It's usually run by your Internet Service Provider (ISP), or it can
     be a public one like Google (8.8.8.8) or Cloudflare (1.1.1.1).
   - Its job is to do all the "recursive" work of finding the final
     answer. It's the only server in the chain that will talk to
     all the *other* servers for you.

 2. Root Server (The Main Index):
 
   - The Recursive Resolver asks the Root Server first.
   - The Root Server doesn't know the IP, but it knows where to find
     the next expert.
   - It looks at the *end* of your domain (e.g., .com, .org, .in) and
     directs the resolver to the correct TLD server.
   - Example: "I don't know 'github.com', but I know who manages all
     '.com' domains. Go ask them."

 3. TLD Server (The Aisle Manager):
 
   - TLD stands for "Top-Level Domain". This server manages a
     specific "top-level" domain, like all `.com` or all `.org` sites.
   - The resolver now asks the `.com` TLD Server: "Where can I find
     'github.com'?"
   - The TLD Server still doesn't know the final IP, but it knows the
     *official* server for that *specific* domain.
   - Example: "I don't know the IP, but I know the official 'Authoritative
     Name Server' for 'github.com'. Go ask them."

 4. Authoritative Name Server (The Final Answer):
 
   - This is the *final* source of truth. It is the server that is
     officially responsible for the domain ("github.com").
   - The resolver asks it, "What is the IP address for 'github.com'?"
   - The Authoritative Server checks its records (its "zone file") and
     gives the final answer.
   - Example: "The IP for 'github.com' is '140.82.121.4'."

 =========================================
 == 
 ==  The DNS Lookup Process (Step-by-Step)
 ==
 =========================================

 1. You type "github.com" into your browser.

 2. Your browser/OS checks its "cache" (local memory) first. If you
    visited recently, it already has the IP. This is the fastest way.
    If not, the search begins...

 3. Your computer sends the query ("What is the IP for github.com?") to
    the Recursive Resolver (e.g., 8.8.8.8).

 4. The Resolver asks a Root Server: "Where can I find '.com' info?"
    - The Root Server replies with the address of the `.com` TLD Server.

 5. The Resolver asks the `.com` TLD Server: "Where can I find 'github.com'?"
    - The TLD Server replies with the address of the Authoritative
      Name Server for `github.com`.

 6. The Resolver asks the `github.com` Authoritative Server: "What is the IP
    for 'github.com'?"
    - The Authoritative Server replies: "The IP is '140.82.121.4'."

 7. The Resolver gets the final answer, gives it back to your browser,
    AND it "caches" (saves) this answer for a short time.
 
 8. Your browser now connects directly to `140.82.121.4`, and the
    GitHub website loads.

 =========================================
 == 
 ==  Key Concepts to Remember
 ==
 =========================================
 
 - DNS Caching:
   - To make this process fast, the answer (the IP address) is saved
     at every step: in your browser, in your operating system (OS), and
     on the Recursive Resolver.
   - This means that 99% of the time, you don't need to do the full
     Root -> TLD -> Authoritative lookup.
 
 - TTL (Time To Live):
   - This is an instruction that tells a server *how long* to cache
     (remember) the IP address.
   - A short TTL (e.g., 5 minutes) means servers will check for
     updates very often.
   - A long TTL (e.g., 24 hours) means servers will use the cached
     answer for a whole day, which is faster but makes updates
     (like changing your website's server) take longer to show up
     for everyone.

 - Common DNS Record Types:
   - A Record: The most common. Maps a domain to an IPv4 address
     (e.g., `140.82.121.4`).
   - AAAA Record: Maps a domain to a newer IPv6 address.
   - CNAME Record: "Canonical Name". Acts as an alias. Points one
     domain name to *another domain name* (e.g., `www.example.com`
     points to `example.com`).
   - MX Record: "Mail Exchange". Directs email to the correct
     mail server (e.g., tells the internet where to send
     `@google.com` emails).
 
/***/