// import express
const express = require('express');

//require modules
const path = require('path');

// require the To Do "database"
const studentDb = require('./data/student-db');

// create express app
const server = express();

// Configure the app (server.set)
server.get('/', function (req, res) {
    res.send('<h1>Hello Express</h1>');
});

// Mount middleware (server.use)

// Mount Routes
server.get('/home', function (req, res) {
    res.render('home');
});

server.get('/students', function (req, res) {
    res.render('students/index', {
        students: studentDb.getAll()
    });
});

// configure the app
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Server to listen on port 3000
server.listen(3000, function () {

});