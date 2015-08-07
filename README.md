# happyRestSort
Express middleware which extract sort from request

# Example : 

	request : /test?sort=name,username&desc=username
	result : req.happyRest.sort =  ["name" , "-username"]

# install

npm install happyrestsort

# How to use ?

like all others Express middleware : 

## Application-level : 

var express = require('express')
  , happyRestSort = require('happyRestSort');

var app = express();

app.use(extractSort());

app.use('/test?sort=name,username&desc=username, function (req, res, next) {
  console.log('Sort:', req.happyRest.sort);
  next();
});

## Application-level : 

var express = require('express')
  , happyRestSort = require('happyRestSort');

var router = express.Router();

router.get('/test?sort=name,username&desc=username', extractSort(), function (req, res, next) {
	  console.log('Sort:', req.happyRest.sort);
	  next();
	})
