#!/usr/bin/env node

var express  = require('express');
var app      = express();
var path     = require('path');
var open     = require("open");

app.use(express.static(path.join(__dirname, 'vendor/hyperpolyglot/')));

app.get('/', function (req, res) {
  res.send('Hello World')
})
// 随机端口3000 - 10000 之间
app.listen(3029)

open("http://127.0.0.1:3029");

