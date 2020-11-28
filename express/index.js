const express = require("express");

let app = express();

// adding a route: (req = request, res = response)
app.get('/', function (req,res) {
    res.send("<Hello World");
})




app.listen(3000, () => {
    console.log("server started");
})
// no more code after this as this is telling the server to <run?>