let express = require('express');
let app = express()
require('dotenv').config();
console.log(process.env.me)

console.log("hello world");



module.exports = app;