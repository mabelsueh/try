// // import like in python:
const axios = require('axios');

async function main() {
    console.log('hello world');
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(response.data);
}

// main();

async function main2() {
    let url = "https://jsonplaceholder.typicode.com";
    let response = await axios.post(url + '/posts',{
    // consoles .typicode.com/posts
        "userId": 404,
        "id": 500,
        "title": "I am very hungry",
        "body": "Hope lunch comes soon"
    })
    console.log(response.data);
}

// main2()

