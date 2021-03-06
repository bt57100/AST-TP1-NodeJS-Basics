#Server

# Import module
user = require './user.coffee'
url = require 'url'
fs = require 'fs'
pug = require 'pug'

renderResource = (filename, type, res, callback) ->
  if type == "html"
    pug.renderFile "views/index.pug", pretty: true, (err, html) ->
      throw err if err
      res.writeHead 200,
        'Content-Type': "text/#{type}"
      res.write html
      res.end()
  else if type == "css"
    #console.log "rendering resource public/#{type}/#{filename}"
    fs.readFile "public/#{type}/#{filename}", (err, file) ->
      throw err if err
      res.writeHead 200,
        'Content-Type': "text/#{type}"
      res.write file
      res.end()

module.exports = 
  logic: (req, res) ->
    # Check route
    url = url.parse req.url
    [_, directory, filetype, filename] = url.pathname.split "/"
    directory = "/" if directory == ""
    switch directory
      when "/"
        renderResource "index.pug", "html", res
      when "save"
        user.save "testu", "testpwd", () ->
          res.writeHead 201,
            'Content-Type': "text/plain"
          res.end "User saved"
      when "get" 
        user.get "testu", () ->
          res.writeHead 200,
            'Content-Type': "text/plain"
          res.end "Got the user"
      when "public" 
        renderResource filename, filetype, res
      else
        res.writeHead 404, 
          'Content-Type': "text/plain"
        res.end "Route not found"
  ,
  port: 8888,
  address: '127.0.0.1'
