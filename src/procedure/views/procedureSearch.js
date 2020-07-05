import { Tree, Icon, Table, Tag, Divider, Button } from "antd";
import { Tabs } from "element-react";
import "element-theme-default";
import React from "react";
const { TreeNode } = Tree;

function TreeSearch() {
  return (
    <Tree
      showIcon
      defaultExpandAll
      defaultSelectedKeys={["0-0-0-0"]}
      switcherIcon={<Icon type="down" />}
    >
      <TreeNode icon={<Icon type="menu" />} title="全部流程" key="0-0">
        <TreeNode icon={<Icon type="team" />} title="人力资源" key="0-0-0">
          <TreeNode icon={<Icon type="carry-out" />} title="考勤" key="0-0-0-0">
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "car"} />
              )}
              title="出差申请"
              key="0-0-0-0-0"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "rocket"} />
              )}
              title="公出申请"
              key="0-0-0-0-1"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "coffee"} />
              )}
              title="加班申请"
              key="0-0-0-0-2"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "home"} />
              )}
              title="请休假申请"
              key="0-0-0-0-3"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "bug"} />
              )}
              title="考勤异常申请"
              key="0-0-0-0-4"
            />
          </TreeNode>
          <TreeNode icon={<Icon type="bell" />} title="用工" key="0-0-0-1">
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "hourglass"} />
              )}
              title="入职确认流程（劳务）"
              key="0-0-0-1-0"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "user-add"} />
              )}
              title="入职确认流程（全职）"
              key="0-0-0-1-1"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "user"} />
              )}
              title="异动流程"
              key="0-0-0-1-2"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "user-delete"} />
              )}
              title="员工离职申请"
              key="0-0-0-1-3"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "solution"} />
              )}
              title="员工转正申请"
              key="0-0-0-1-4"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "plus"} />
              )}
              title="招聘需求申请"
              key="0-0-0-1-5"
            />
          </TreeNode>
        </TreeNode>
        <TreeNode icon={<Icon type="alert" />} title="请示" key="0-0-1">
          <TreeNode
            icon={({ selected }) => (
              <Icon type={selected ? "check" : "file-word"} />
            )}
            title="接待申请表"
            key="0-0-1-0"
          />

          <TreeNode
            icon={({ selected }) => <Icon type={selected ? "check" : "more"} />}
            title="请示会签流程"
            key="0-0-1-1"
          />
        </TreeNode>
        <TreeNode icon={<Icon type="account-book" />} title="财务" key="0-0-2">
          <TreeNode
            icon={<Icon type="pay-circle" />}
            title="费用报销申请流程"
            key="0-0-2-0"
          >
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "money-collect"} />
              )}
              title="差旅费报销单"
              key="0-0-2-0-0"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "property-safety"} />
              )}
              title="冲抵预付账款申请单"
              key="0-0-2-0-1"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "dollar"} />
              )}
              title="费用报销单"
              key="0-0-2-0-2"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "red-envelope"} />
              )}
              title="费用分摊报销单"
              key="0-0-2-0-3"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "euro"} />
              )}
              title="联盟费用审批"
              key="0-0-2-0-4"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "pound"} />
              )}
              title="人力成本报销单"
              key="0-0-2-0-5"
            />
            <TreeNode
              icon={({ selected }) => (
                <Icon type={selected ? "check" : "transaction"} />
              )}
              title="无形资产报销单"
              key="0-0-2-0-6"
            />
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </Tree>
  );
}

function STable() {
  const label = (
    <span>
      <Icon type="bell" /> 全部
    </span>
  );
  const columns = [
    { title: "流程标题", dataIndex: "name", key: "name" },
    { title: "创建人", dataIndex: "person", key: "person" },
    { title: "创建日期", dataIndex: "time", key: "time" },
    {
      title: "标签",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = tag;
            if (tag === "被退回") {
              color = "volcano";
            } else if (tag === "已完成") {
              color = "#1ba784";
            } else {
              color = "#35333c";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
  ];
  const columnsWait = [
    { title: "流程标题", dataIndex: "name", key: "name" },
    { title: "创建人", dataIndex: "person", key: "person" },
    { title: "创建日期", dataIndex: "time", key: "time" },
    {
      title: "标签",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            return (
              <Tag color={"volcano"} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (text) => (
        <span>
          <Button type="primary" size={"small"}>
            编辑
          </Button>
          <Divider type="vertical" />
          <Button type="danger" size={"small"}>
            删除
          </Button>
        </span>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      name: "2020-1-8-包容-路由器UI",
      person: "包容",
      time: "2020-01-08-15：30",
      description: "由15:30因公出差",
      tags: ["被退回"],
    },
    {
      key: 2,
      name: "2020-1-8-包容-路由器UI",
      person: "包容",
      time: "2020-05-05-12：30",
      description: "申请因公接待",
      tags: ["未完成"],
    },
    {
      key: 3,
      name: "2020-1-8-包容-路由器UI",
      person: "包容",
      time: "2020-05-08-15：30",
      description: "申请休年假",
      tags: ["已完成"],
    },
  ];
  return (
    <Tabs type="border-card" activeName="1">
      <Tabs.Pane label={label} name="1">
        <Table
          columns={columns}
          expandedRowRender={(record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          )}
          dataSource={data}
        />
      </Tabs.Pane>
      <Tabs.Pane label="待处理" name="2">
        <Table
          columns={columnsWait}
          expandedRowRender={(record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          )}
          dataSource={data}
        />
      </Tabs.Pane>
      <Tabs.Pane label="被退回" name="3">
        被退回
      </Tabs.Pane>
      <Tabs.Pane label="已完成" name="4">
        已完成
      </Tabs.Pane>
    </Tabs>
  );
}
class pSearch extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "20%",
            height: "100%",
            float: "left",
          }}
        >
          <TreeSearch />
        </div>
        <div
          style={{
            width: "70%",
            height: "100%",
            marginLeft: 50,
            float: "left",
          }}
        >
          <STable />
        </div>
      </div>
    );
  }
}
export default pSearch;
