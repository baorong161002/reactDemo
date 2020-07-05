var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Time = new Schema(
  {
    color: String,
    name: String,
  },
  { collection: "time" }
);

module.exports = Time;
