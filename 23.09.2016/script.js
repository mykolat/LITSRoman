var express = require ('express');
var app = express();
var exphbs  = require('express-handlebars');


//viewengine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



 app.get('/', function(req,res){
   res.render('home');

 })
 app.get('/price', function(req,res){
   res.render('price');

 })

 app.get('/contacts', function(req,res){
   res.render('contacts');

 })

 app.get('/admin', function(req,res){
   res.render('home');

 })




 app.listen(3000, function () {
   console.log('Example app listening on port 3000!'); // mt());
 });
