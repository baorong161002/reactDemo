var mongoose = require("mongoose");
var TimeSchema = require("../schemas/time.js");
var TimeBox = mongoose.model("TimeBox", TimeSchema);

module.exports = TimeBox;
