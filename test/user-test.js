/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var user = require('../src/lib/user.js');
var should = require('should');

describe('user', function() {
  it('save properly', function(done){
      // sth
    user.save('ok', 'pwd', function(err) {
        should.not.exist(err);
        done();
      });
  });
  it('not save properly because missing parameter', function(done){
      user.save('only name', '', function(err) {
        should.not.exist(err);
        done();
      });
  });
  it('get', function(done){
      // sth
      done();
  });
});


