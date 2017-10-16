# Index
 
#Import modules
http = require 'http'
server = require './server/server.coffee'

# Declare an http server
http.createServer(
  # Call function 'logic' of module server
  server.logic
  # Start the server with information in module server
  ).listen server.port, server.address
