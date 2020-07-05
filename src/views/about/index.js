import React from "react";
// import { Rate } from "antd";
// import { Steps, Icon } from "antd";
// import Timer from "@/views/about/timer.js";
// import $ from "jquery";

// const { Step } = Steps;

export default class About extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state.userInput = "你想要输入啥？？？";
  //   this.myRef = React.createRef();
  // }

  // state = {
  //   userInput: "",
  // };

  // handleChange(e) {
  //   this.setState({ userInput: e.target.value });
  // }
  // // 获取
  // // _getTime() {}
  // clearAndFocusInput() {
  //   const that = this;
  //   $.ajax({
  //     url: "/getTime",
  //     type: "get",
  //     dataType: "json",
  //     success: (data) => {
  //       const timeList = that.timeSort(data);
  //       that.setState({
  //         userInput: timeList,
  //       });
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   }); //点击后改变state

  //   this.myRef.current.focus();
  // }
  render() {
    // let helloString =
    //   " Hello World  !!!          1.dangerouslySetInnerHTMl 是React标签的一个属性，类似于angular的ng-bind；";
    return (
      // <div>
      //   <div dangerouslySetInnerHTML={{ __html: helloString }} />
      //   <div
      //     dangerouslySetInnerHTML={{
      //       __html:
      //         '<div><h1 style="color:#621624;font-size:50px">123<h1></div>',
      //     }}
      //   />
      //   {/* 1.dangerouslySetInnerHTMl 是React标签的一个属性，类似于angular的ng-bind；
      //               2.有2个{{}}，第一{}代表jsx语法开始，第二个是代表dangerouslySetInnerHTML接收的是一个对象键值对;
      //               3.既可以插入DOM，又可以插入字符串；
      //               4.不合时宜的使用 innerHTML 可能会导致 cross-site scripting (XSS) 攻击。 净化用户的输入来显示的时候，经常会出现错误，
      //               不合适的净化也是导致网页攻击的原因之一。dangerouslySetInnerHTML 这个 prop 的命名是故意这么设计的，以此来警告，它的
      //               prop 值（ 一个对象而不是字符串 ）应该被用来表明净化后的数据。 */}

      //   <div onClick={this.clearAndFocusInput.bind(this)}>
      //     点击这里获取输入框的焦点（Click to Focus and Reset）
      //   </div>
      //   <input
      //     ref={this.myRef}
      //     value={this.state.userInput}
      //     onChange={this.handleChange.bind(this)}
      //   />
      //   <Rate />
      //   <div>
      //     <Steps>
      //       <Step status="finish" title="登陆" icon={<Icon type="user" />} />
      //       <Step
      //         status="finish"
      //         title="核实"
      //         icon={<Icon type="solution" />}
      //       />
      //       <Step
      //         status="process"
      //         title="支付"
      //         icon={<Icon type="loading" />}
      //       />
      //       <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
      //     </Steps>
      //   </div>
      //   <div>
      //     <Timer />
      //   </div>
      <div>
        <iframe
          src="http://localhost:8080/Test/view/jsp/echarts.jsp"
          width="1200"
          height="700"
          frameborder="0"
          title={"hahhah "}
        />
      </div>
      // </div>
    );
  }
}
