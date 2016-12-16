var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require('body-parser'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    app = express(),
    User = require("./models/user");
    
mongoose.connect('mongodb://localhost/auth_demo_app');
    
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/secret', function(req, res){
    res.render('secret');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('The UserAuth Server has started!');
});