var express = require('express');
var mongojs = require('mongojs');
  app = express();
  port = process.env.PORT || 3000;
  
  var db = mongojs('Tododb');
  bodyParser = require('body-parser');
  
db.on('error', function (err) {
	console.log('database error', err);
});

db.on('connect', function () {
	console.log('database connected');
});

var cors=require('cors');

app.use(cors({origin:true,credentials: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found Please Check the API'})
// });


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);