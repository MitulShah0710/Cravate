const express = require("express");
var app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.get('/initial', function (req, res) {
    res.json("Hello World");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

module.exports = app;