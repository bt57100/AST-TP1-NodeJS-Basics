/*
 * Module user
 */

module.exports = {
    // Save function
    save: function(name, pwd, callback){
        console.log("saving " + name + " with pwd " + pwd);
        callback();
    },
    
    // Get function
    get: function(name, callback) {
        console.log("getting " + name);
        callback();
    }
};
