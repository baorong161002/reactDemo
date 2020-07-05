const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
});
const con = mongoose.connection;
con.on("error", console.error.bind(console, "连接数据库失败"));
con.once("open", () => {
  //定义一个schema
  let Schema = mongoose.Schema({
    color: String,
    name: String,
  });
  Schema.methods.eat = function () {
    console.log("I've eatten one " + this.name);
  };
  //继承一个schema
  let Model = mongoose.model("fruit", Schema);
  //生成一个document
  let apple = new Model({
    color: "red",
    name: "apple",
  });
  let banana = new Model({
    color: "yellow",
    name: "banana",
  });
  let orange = new Model({
    color: "yellow",
    name: "orange",
  });
  //存放数据
  apple.save((err, apple) => {
    if (err) return console.log(err);
    apple.eat();
  });

  banana.save((err, banana) => {
    if (err) return console.log(err);
    banana.eat();
  });
  orange.save((err, orange) => {
    if (err) return console.log(err);
    orange.eat();
  });

  // //查找数据
  // Model.find({ name: "apple" }, (err, data) => {
  //   console.log(data);
  // });

  // //删除数据
  // //   （节点：3900）不推荐警告：collection.remove已不推荐使用。请改用deleteOne、deleteMany或bulkWrite。
  // Model.remove({ name: "apple" }, function (err, data) {
  //   if (err) return console.log(err);
  //   console.log(data);
  //   // removed!
  // });

  // //修改数据
  // Model.update({ name: "orange" }, { color: "orange" }, function (err, data) {
  //   if (err) console.log(err);
  //   console.log(data);
  // });
});
