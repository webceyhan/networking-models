#!/bin/bash

openssl req -x509 -newkey rsa:4096 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-private.pem -out localhost-cert.pem


# first install certbot client
# - brew install certbot

# type following on the server you want to authorized
# in this case it's my own macbook with no-ip redirection to localhost
# note: open ports 80 and 443 (in bbox2) and unlock on my-proximus settings page
#
# - certbot certonly --standalone

# copy the created files into this project and load them as the ones created by above code!
