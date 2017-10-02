/*
 * Index
 */

// Import modules
var http = require('http');
var server = require('./modules/server.js');


// Declare an http server
http.createServer(
        // Call function 'logic' of module server
        server.logic

        // Start the server with information in module server
        ).listen(server.port, server.address);


