import { Statistic, Card, Row, Col, Icon } from "antd";
import React from "react";
import "./style.css";

function DescriptionOne() {
  return (
    <Row gutter={12} type="flex">
      <Col span={6}>
        <Card>
          <Statistic
            title="实时"
            value={Math.random()}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Active"
            value={7.38}
            precision={2}
            valueStyle={{ color: "#cf1322" }}
            prefix={<Icon type="fall" />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Active"
            value={3.67}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<Icon type="rise" />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: "#cf1322" }}
            prefix={<Icon type="arrow-down" />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
}
// class SwitchBtn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       border1: true,
//       border2: true
//     };
//   }
//   switchBorder1() {
//     this.setState({ border1: !this.state.border1 });
//     console.log(this.state);
//   }
//   switchBorder2() {
//     this.setState({ border2: !this.state.border2 });
//     console.log(this.state);
//   }
//   render() {
//     const divStyle = {
//       height: "100px",
//       padding: "20px 0",
//       margin: "0 0 30px 0"
//     };
//     const btnStyle1 = {
//       fontSize: "30px",
//       width: "50%",
//       textAlign: "center",
//       float: "left",
//       border: this.state.border1 ? "" : "2px solid yellow"
//     };
//     const btnStyle2 = {
//       fontSize: "30px",
//       width: "50%",
//       textAlign: "center",
//       float: "left",
//       border: this.state.border2 ? "" : "2px solid red"
//     };
//     return (
//       <div style={divStyle}>
//         <div
//           id="LoginBtn"
//           style={btnStyle1}
//           onMouseOver={this.switchBorder1.bind(this)}
//           onMouseOut={this.switchBorder1.bind(this)}
//         >
//           <p>登录</p>
//         </div>
//         <div
//           id="RegisterBtn"
//           style={btnStyle2}
//           onMouseOver={this.switchBorder2.bind(this)}
//           onMouseOut={this.switchBorder2.bind(this)}
//         >
//           <p>注册</p>
//         </div>
//       </div>
//     );
//   }
// }
class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <DescriptionOne />
        {/* <SwitchBtn /> */}
      </div>
    );
  }
}

export default Description;
