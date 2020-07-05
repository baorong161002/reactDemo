import React from "react";
import {
  Button,
  Form,
  Input,
  Layout,
  TimeRangePicker,
  Select,
  DatePicker,
} from "element-react";
import "element-theme-default";

const TD = new Date();

const Y = TD.getFullYear() + "-";
const M =
  (TD.getMonth() + 1 < 10 ? "0" + (TD.getMonth() + 1) : TD.getMonth() + 1) +
  "-";
const D = TD.getDate() + " ";

const Na = "加班申请-包容-";

const date1 = Na + Y + M + D;

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: date1,
        region: false,
        ID: Math.random(),
        date1: null,
        date2: null,
        desc: "",
        time: null,
      },
    };
  }

  onSubmit(e) {}

  onChange(key, value) {
    // eslint-disable-next-line
    this.state.form[key] = value;
    this.forceUpdate();
  }

  render() {
    return (
      <Form
        model={this.state.form}
        labelWidth="150"
        onSubmit={this.onSubmit.bind(this)}
      >
        <Form.Item label="流程标题">
          <Input
            value={this.state.form.name}
            onChange={this.onChange.bind(this, "name")}
            style={{ width: 200 }}
          ></Input>
        </Form.Item>
        <Form.Item label="流程ID">
          <Input
            value={this.state.form.ID}
            onChange={this.onChange.bind(this, "ID")}
            style={{ width: 200 }}
          ></Input>
        </Form.Item>
        <Form.Item label="是否为法定节假日">
          <Select value={this.state.form.region} placeholder="请选择">
            <Select.Option label="是" value="true"></Select.Option>
            <Select.Option label="不是" value="false"></Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="加班开始日期">
          <Layout.Col span="11">
            <Form.Item prop="date1" labelWidth="0px">
              <DatePicker
                value={this.state.form.date1}
                placeholder="选择日期"
                onChange={this.onChange.bind(this, "date1")}
              />
            </Form.Item>
          </Layout.Col>
        </Form.Item>
        <Form.Item label="加班结束日期">
          <Layout.Col span="11">
            <Form.Item prop="date1" labelWidth="0px">
              <DatePicker
                value={this.state.form.date2}
                placeholder="选择日期"
                onChange={this.onChange.bind(this, "date2")}
              />
            </Form.Item>
          </Layout.Col>
        </Form.Item>
        <Form.Item label="加班时间">
          <TimeRangePicker
            pickerWidth={300}
            onChange={this.onChange.bind(this, "time")}
            placeholder="选择时间"
            value={this.state.form.time}
          />
        </Form.Item>
        <Form.Item label="加班原因">
          <Input
            type="textarea"
            value={this.state.form.desc}
            onChange={this.onChange.bind(this, "desc")}
            style={{ width: 400 }}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" nativeType="submit">
            立即创建
          </Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Demo;
