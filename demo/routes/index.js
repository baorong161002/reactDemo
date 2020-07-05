var express = require("express");
var router = express.Router();
var Time = require("../public/model/time");

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "React TimeList",
  });
});

// 查找数据
router.get("/getTime", (req, res, next) => {
  Time.find({ name: "apple" }, (err, data) => {
    console.log(data);
  });
});

// 添加数据

// 删除todo
router.post("/deleteItem", (req, res, next) => {
  Time.remove({ name: "apple" }, function (err, data) {
    if (err) return console.log(err);
    console.log(data);
    // removed!
  });
});

module.exports = router;
