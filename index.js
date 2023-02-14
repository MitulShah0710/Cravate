const express = require("express");
const connection = require("./db-connection/connection");
var app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

const server = require('http').createServer(app);

connection.connect().then(success => {
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

app.get('/initial', function (req, res) {
    res.json("Hello World");
});

module.exports = app;