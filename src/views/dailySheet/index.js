import React from "react";
import "./style.css";
//import Calendar from "@/compenents/Calendar/Calendar.js";

export default class dailySheet extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state.localTime = new Date();
  //   this.myRef = React.createRef();
  // }
  // state = {
  //   localTime: "",
  // };
  // setLocalTime() {
  //   this.setState({ localTime: new Date() });
  // }
  // handleChange(e) {
  //   this.setState({ localTime: e.target.value });
  // }
  render() {
    return (
      // <div>
      //   <div>
      //     <input
      //       ref={this.myRef}
      //       value={this.state.localTime}
      //       onChange={this.handleChange.bind(this)}
      //       className="date"
      //     />
      //   </div>
      //   <div onClick={this.setLocalTime.bind(this)}>
      //     <img
      //       src={[require("@/static/image/zhiwen.jpg")]}
      //       alt="zhiwen"
      //       className="zhiwen"
      //     />
      //   </div>
      //   <Calendar />
      // </div>
      <div>
        <iframe
          src="http://localhost:8080/Test/view/jsp/daka.jsp"
          width="1200"
          height="700"
          frameborder="0"
          title={"hahhah "}
        />
      </div>
    );
  }
}
