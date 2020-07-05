import { Card } from "antd";
import React from "react";
import "./style.css";

const { Meta } = Card;

function CardOne(props) {
  return (
    <Card
      onClick={props.onClick}
      hoverable
      style={{ width: 240, height: 400, float: "left", margin: 20 }}
      cover={
        <img
          style={{ width: 238, height: 298 }}
          alt="example"
          src="http://chuantu.xyz/t6/708/1577325969x1033347913.jpg"
        />
      }
    >
      <Meta title="法兰西共和国" description="www.instagram.com" />
    </Card>
  );
}
function CardTwo(props) {
  return (
    <Card
      onClick={props.onClick}
      hoverable
      style={{ width: 240, height: 400, float: "left", margin: 20 }}
      cover={
        <img
          style={{ width: 238, height: 298 }}
          alt="example"
          src="http://chuantu.xyz/t6/708/1577326051x1031866013.jpg"
        />
      }
    >
      <Meta title="中华人民共和国" description="www.instagram.com" />
    </Card>
  );
}
function CardThird(props) {
  return (
    <Card
      onClick={props.onClick}
      hoverable
      style={{ width: 240, height: 400, float: "left", margin: 20 }}
      cover={
        <img
          style={{ width: 238, height: 298 }}
          alt="example"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577337547952&di=6614fd9c4751df0886bbb03db0dfde7a&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20122%2F213%2Fw1365h2048%2F20190424%2Fd58b-hvvuiyn8987440.jpg"
        />
      }
    >
      <Meta title="民主刚果" description="www.instagram.com" />
    </Card>
  );
}
class Control extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThird = this.handleClickThird.bind(this);
    // this.valueToParent = this.valueToParent.bind(this);
    //   this.state = { whichNumber: 1 };
  }
  handleClickOne() {
    this.props.data("法兰西");
  }

  handleClickTwo() {
    this.props.data("中国");
  }
  handleClickThird() {
    this.props.data("刚果");
  }
  // valueToParent = () => {
  //   this.props.data("zzzzzzzzzzzzzzzzzz");
  // };
  render() {
    return (
      <div>
        {/* eslint-disable-next-line */}
        {/* <a onClick={this.valueToParent}>向父组件传值123</a> */}
        <CardOne onClick={this.handleClickOne} />
        <CardTwo onClick={this.handleClickTwo} />
        <CardThird onClick={this.handleClickThird} />
      </div>
    );
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.Foo = this.Foo.bind(this);
    // this.state = {
    //   name: "我是初始值"
    // };
  }
  Foo(data) {
    // this.setState({
    //   name: data
    // });
    this.props.Fdata(data);
  }
  render() {
    return (
      <div className="card">
        {/* <div>我接受子组件传信息：{this.state.name}</div> */}
        <Control data={this.Foo} />
      </div>
    );
  }
}
export default Box;
