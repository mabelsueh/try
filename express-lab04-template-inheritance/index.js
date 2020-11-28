// normal setup with added template
// known as templating in industry

// normal setup, add yarn add hbs in terminal
// create new file (directory) named views

const express = require('express');
// imports hbs template
const hbs = require('hbs');

// add this everytime u use wax-on
const wax = require('wax-on');

// create new express app
const app = express();

// tell express which template engine to use
// template = views in express
// hbs = handlebars (a template)
// aka tells express we are using hbs as the view engine (same as above 3 lines)
app.set('view engine', 'hbs');

// enable static files (static = public in express)
app.use(express.static('public'));

// enable template inheritance
wax.on(hbs.handlebars);
// '.' refers to the current directory index.js is in
// this is for the base.hbs template we want to refer to
wax.setLayoutPath('./views/layouts');

// <------------ express setup ends here ---------------------------------------

// route begins here
app.get('/', function(req,res) {
    res.render('index.hbs');
})

app.get('/about-us', (req,res)=>{
    res.render('about-us.hbs');
})

app.get('/contact', (req,res)=>{
    res.render('contact.hbs');
})

// // all processed on express side
// app.get('/hi/:name', function(req,res) {
//     let name = req.params.name;
//     let luckyNum = Math.floor(Math.random() * 100);
//     res.render('hi.hbs', {
//         'username' : name,
//         'luckyNum' : luckyNum,
//     });
// })

// routes end here

// server creation
app.listen(3000, () =>{
    console.log("Server started")
})

