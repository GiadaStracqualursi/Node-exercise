"use strict";
exports.__esModule = true;
var express = require("express");
require("dotenv/config");
var app = express();
var port = process.env.PORT;
app.get("/", function (req, res) {
    res.json([
        {
            fruit: 'Apple',
            size: 'Medium',
            color: 'Red'
        },
        {
            fruit: 'Blackberry',
            size: 'Small',
            color: 'Purple'
        },
    ]);
});
app.listen(port, function () {
    console.log("Server's running at http://localhost:".concat(port));
});
module.exports = app;
