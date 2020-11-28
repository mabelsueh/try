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

// fruits list lookup
const fruitsLookup = {
    'apple':3,
    "durian":15,
    'orange':6,
    'banana':4
}

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
wax.setLayoutPath('./views/layout');

//enable forms
app.use(express.urlencoded({ extended: false }));

// <------------ express setup ends here ---------------------------------------

// route begins here
app.get('/', function (req, res) {
    res.render('index.hbs');
})

app.get('/about-us', (req, res) => {
    res.render('about-us.hbs');
})

app.get('/contact', (req, res) => {
    res.render('contact.hbs');
})

//get route here to display form
app.get('/add_food', (req,res)=> {
    res.render('add_food.hbs');
})

app.get('/fruits', (req,res)=> {
    res.render('fruits.hbs');
})

//print data received
app.post('/add_food', (req,res)=>{
    // below 2 lines only to test form, to be removed after testing
    // console.log(req.body);
    // res.send(req.body);
    let { foodName, calories, tags } = req.body;
  res.render("display_food_summary", {
    foodName,
    calories,
    // make sure tags are in an array
    tags: tags.join(', ')
  });

})

// please look at his code
app.post('/fruits', (req,res)=>{
    // below 2 lines only to test form, to be removed after testing
    // console.log(req.body);
    // res.send(req.body);
    let fruits = req.body.items;
    let totalCost = 0;
    for (let f of fruits) {
    totalCost += fruitsLookup[f];
    }
    res.render("fruits_total")



})

app.get('/display_food_summary', (req,res)=>{
    res.render('display_food_summary');
})
// routes end here

// server creation
app.listen(3000, () => {
    console.log("Server started")
})

