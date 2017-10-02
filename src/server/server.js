/*
 * Server
 */

// Import module
var user = require('./user.js');

// Message to be displayed 
var message = 'Hello World\n';

module.exports = {
    logic: function (req, res) {
        // Check route
        console.log(req.url);

        if (req.url === "/save") {
            user.save("testu", "testpwd", function () {
                // Write a response header
                res.writeHead(200, {'Content-Type': 'text/plain'});

                // Write a response content
                res.end("User is saved");
            });
        } else if (req.url === "/get") {
            user.get("testu", function () {
                // Write a response header
                res.writeHead(200, {'Content-Type': 'text/plain'});

                // Write a response content
                res.end("User is get");
            });
        } else if (req.url === "/") {

            // Write a response header
            res.writeHead(200, {'Content-Type': 'text/plain'});

            // Write a response content
            res.end(message);
        }
    },
    port: 8888,
    address: '127.0.0.1'
};
