// HANDS ON
// Using the movies API (https://github.com/kunxin-chor/tgc5-restful-api-example), use the various endpoints to implement an CRUD application.

// You must have  routes

// A route to display all the movies
// A route to allow the user to create a new movie
// A route to allow the user to edit an existing movie
// A route to allow the user to delete a movie
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
const axios = require('axios');

// setup view engines
let app=express();
app.set('view engine','hbs');
// do we need this?
app.use(express.static('public'));

// setup wax on with hbs
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// setup for forms
app.use(express.urlencoded({ extended: false }));

// add routes here
const baseURL = "https://ckx-movies-api.herokuapp.com/"

// to display
// app.get('/name your route)
app.get('/movies', async(req,res) =>{
     // (baseURL + /link specified in api)
    let axiosResponse = await axios.get(baseURL + '/movies');
    // res.render('the endpoint u want to display the retrieved content')
        res.render('movies.hbs', {
            // {this is known as passing over data}
            "movies":axiosResponse.data
        })
    })

// to create
app.get('/create', async(req,res) =>{
        res.render('create.hbs')
})

// end routes

// server
app.listen(3000,() => console.log("server started"));