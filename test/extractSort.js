var express = require('express')
  , request = require('supertest')
  , extractSort = require('../extractSort');

var app = express();

app.use(extractSort());

app.use(function(req, res, next){
  res.end(JSON.stringify(req.happyRest.sort));
});

describe('connect.extractSort()', function(){
    it('should extract req.query.sort', function(done){
      request(app)
      .get('/test?sort=name,username&desc=username')
      .expect('["name","-username"]', done);
    })
 
})
