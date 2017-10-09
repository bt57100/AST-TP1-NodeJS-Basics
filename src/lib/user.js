/*
 * Module user
 */

module.exports = {
    // Save function
    save: function(name, pwd, callback){
        if(callback == null) {
            callback = pwd;
            callback(new Error("Missing parameter"));
        } else {
            console.log("saving " + name + " with pwd " + pwd);
            callback();
        }
    },
    
    // Get function
    get: function(name, callback) {
        console.log("getting " + name);
        callback();
    }
};
