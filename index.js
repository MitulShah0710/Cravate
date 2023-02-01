
const express = require("express");
var app = express();

app.get('/initial', function (req, res) {
    res.send('{ "response": "Hello World" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": "It works" }');
});

app.listen(process.env.PORT || 3000);

module.exports = app;