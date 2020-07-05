import React from "react";
import "./style.css";

// 父组件调用该组件
import EchartsTest from "@/compenents/EchartsTest"; // 引入上述组件
// import Box from "./card.js";
import Description from "./description.js";

// function FormattedDate(props) {
//   return <h1>现在是 {props.date.toLocaleTimeString()}</h1>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div className="clock">
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.Moo = this.Moo.bind(this);
    this.state = {
      name: ""
    };
  }
  Moo(data) {
    this.setState({
      name: data
    });
    // this.refs.chuanzhi.componentDidMount("调用方法成功");
  }
  render() {
    return (
      <div style={styles.bg} className="home">
        {/* <p style={styles.ft}>Hello World!!!</p> */}
        {/* <div>你现在选择的是：{this.state.name}</div> */}
        {/* <Clock /> */}
        {/* <Box Fdata={this.Moo} /> */}
        {/* <EchartsTest
          nation={this.state.name}
          ref="chuanzhi"
          style={{ width: 400, height: 400 }}
        /> */}
        <Description />
        <EchartsTest style={{ width: 1200, height: 800 }} />
      </div>
    );
  }
}

const styles = {
  bgxx: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(100vh - 64px)"
  },
  ft: {
    color: "#de3f7c",
    float: "left"
  }
};

export default Home;
