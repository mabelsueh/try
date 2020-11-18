// import like in python
const axios = require('axios');

async function m1() {
    let url = "https://ckx-movies-api.herokuapp.com/";
    let movieList = await axios.get(url + "movies");
    console.log(movieList.data);
}

// m1();

async function c1() {
    let url = "https://ckx-movies-api.herokuapp.com/";
    let movieList2 = await axios.post(url + "movie/create", {
        "title": 'Avatar',
        "plot": "Aliens",
    })
    console.log(movieList2.data);
}

// c1();

async function p1() {
    let url = "https://ckx-movies-api.herokuapp.com/";
    let movieList2 = await axios.patch(url + "movie/5fb4bbedb4f44550712da242", {
        "title": 'Inception',
        "plot": "dreams",
    })
    console.log(movieList2.data);
}
p1();
