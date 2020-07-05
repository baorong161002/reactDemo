import React from "react";
import TinyMCE from "react-tinymce";
import { Spin } from "antd";
import { ScriptLoaded } from "@/compenents/ScriptLoaded";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>人力资源</span>
            </span>
          }
        >
          <Menu.Item key="1">薪酬</Menu.Item>
          <Menu.Item key="2">用工</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>财务</span>
            </span>
          }
        >
          <Menu.Item key="5">业务申请流程</Menu.Item>
          <Menu.Item key="6">费用报销申请流程</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>综合管理</span>
            </span>
          }
        >
          <Menu.Item key="9">用印管理</Menu.Item>
          <Menu.Item key="10">资产申购</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
class NewsTinymce extends ScriptLoaded {
  constructor(props) {
    super(props);
    this.loadScriptUrl =
      process.env.PUBLIC_URL + "/js/tinymce5.0.15/tinymce.min.js";
  }

  handleEditorChange(e) {
    console.log(e.target.getContent());
  }

  getScriptLoadElement = scriptLoaded => {
    if (scriptLoaded) {
      return (
        <div>
          <div style={{ width: "25%", float: "left" }}>
            <Sider />
          </div>

          <div style={{ width: "70%", height: 410, float: "left" }}>
            <TinyMCE
              content="<p>这是编辑器的初始内容</p>"
              config={{
                plugins: "autolink link image lists print preview",
                toolbar:
                  "undo redo | bold italic | alignleft aligncenter alignright",
                language: "zh_CN"
              }}
              onChange={this.handleEditorChange}
            />
          </div>
        </div>
      );
    } else {
      return <Spin spinning={true} tip="组件加载中..."></Spin>;
    }
  };

  componentDidMount() {}
}

export default NewsTinymce;
