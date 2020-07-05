import React from "react";
import { Layout, Spin } from "antd";
import Session from "@/core/session";
import Api from "@/api/api";
import MessageBox from "@/core/message";
import "./main.css";
import CustomHeader from "./customheader";
import CustomMenu from "./custommenu";
import NewsMenu from "@/views/news/newsMenu";
import ExcelMenu from "@/views/excel/excelMenu";
import ProcedureMenu from "@/procedure/procedureMenu";
import Router from "@/router/router";
import { connect } from "react-redux";
import * as UserAction from "@/store/user/action.js";
import { withRouter } from "react-router-dom";

const { Sider, Header, Content, Footer } = Layout;

@withRouter //效果就是把路由相关的方法通过props传给它包裹的组件的props上；
@connect(
  (state) => ({
    user: state.userInfo,
  }),
  { getUserInfo: UserAction.get, setUserMenu: UserAction.setUserMenu }
)
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.collapsed = false;
  }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  loginOut() {
    let userParams = Session.getUserData();
    if (userParams != null) {
      let reqObj = {};
      reqObj.userId = userParams.userId;
      reqObj.token = userParams.token;
      if (MessageBox.showLoadingMessage("正在退出登录")) {
        Api.postUrl(Api.Url.USER.LOGOUT, reqObj).then(
          () => {
            MessageBox.closeLoadingMessage();
            Session.deleteUserSession();
            this.props.history.push("/login");
          },
          () => {
            MessageBox.closeLoadingMessage();
            MessageBox.showErrorMessage("退出登录失败");
            Session.deleteUserSession();
            this.props.history.push("/login");
            /*  message({
                          type: 'error', message: '退出登录失败'
                      });*/
          }
        );
      }
    }
  }

  componentDidMount() {
    const menuList = [
      { key: "/home", title: "首页", icon: "bank" },
      {
        key: "/homex",
        title: "常用功能",
        icon: "folder-open",
        subs: [
          {
            key: "/homex/about",
            linkPath: "/general/about",
            title: "实时",
            icon: "fire",
          },
          {
            key: "/homex/dailySheet",
            linkPath: "/general/dailySheet",
            title: "考勤",
            icon: "carry-out",
          },
          {
            key: "/homex/useInfo",
            linkPath: "/general/useInfo",
            title: "信息查询",
            icon: "bank",
          },
        ],
      },
    ];
    if (true === this.GlobalEnvParams.PRO_MENU) {
      menuList.push(...ProcedureMenu);
    }
    if (true === this.GlobalEnvParams.NEWS_MENU) {
      menuList.push(...NewsMenu);
    }
    if (true === this.GlobalEnvParams.EXCEL_MENU) {
      menuList.push(...ExcelMenu);
    }

    this.props.setUserMenu(menuList);
    this.props.getUserInfo();
  }

  render() {
    //   alert(JSON.stringify(this.props.user.menuList));
    return (
      <div id="page">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div style={{ height: "100vh", overflowY: "auto" }}>
              <div className="logo">React 后台管理系统</div>
              <Spin spinning={this.props.user.loading} tip="菜单加载中...">
                <CustomMenu menus={this.props.user.menuList} />
              </Spin>
            </div>
          </Sider>
          <Layout>
            <Header className="header">
              <CustomHeader
                collapsed={this.state.collapsed}
                onToggle={this.toggle}
                logout={this.loginOut.bind(this)}
              />
            </Header>
            <Content className="mainContent">
              <div style={{ padding: 16, position: "relative" }}>
                <Router />
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              基于React的后台管理系统 ©2019-{new Date().format("yyyy")}
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Main;
