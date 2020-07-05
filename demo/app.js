var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("node启动成功");
});

app.listen(8000, () => {
  console.log("node服务器监听8000端口成功");
});

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

module.exports = app;
