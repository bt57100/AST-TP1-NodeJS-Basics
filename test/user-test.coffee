user = require '../src/server/user.coffee'
should = require 'should'

describe 'user', () ->
  it 'save properly', (done) ->
    user.save 'ok', 'pwd', (err) ->
      should.not.exist err
      done()

  it 'not save properly because missing parameter', (done) ->
    user.save 'only name', (err) ->
      should.exist err
      done()
     
  it 'get', (done) ->
    # do something 
    done()
