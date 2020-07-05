import { Calendar } from "antd";
import React from "react";
//默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

function onPanelChange(value, mode) {
  console.log(value, mode);
}
class Calender extends React.Component {
  render() {
    return (
      <div
        style={{
          width: 300,
          border: "1px solid #d9d9d9",
          borderRadius: 4,
          float: "right"
        }}
      >
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    );
  }
}
export default Calender;
