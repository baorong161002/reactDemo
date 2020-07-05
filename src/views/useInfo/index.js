import { Tree, Icon } from "antd";
import { Table } from "element-react";
import "element-theme-default";
import React from "react";
const { TreeNode } = Tree;

function TreeSearch() {
  return (
    <Tree
      showIcon
      defaultExpandAll
      defaultSelectedKeys={["0-0-0"]}
      switcherIcon={<Icon type="down" />}
    >
      <TreeNode icon={<Icon type="menu" />} title="全部流程" key="0-0">
        <TreeNode icon={<Icon type="team" />} title="人力资源" key="0-0-0">
          <TreeNode
            icon={({ selected }) => <Icon type={selected ? "check" : "car"} />}
            title="张三"
            key="0-0-0-0-0"
          />

          <TreeNode
            icon={({ selected }) => <Icon type={selected ? "check" : "home"} />}
            title="李四"
            key="0-0-0-0-3"
          />
          <TreeNode
            icon={({ selected }) => <Icon type={selected ? "check" : "bug"} />}
            title="王五"
            key="0-0-0-0-4"
          />
        </TreeNode>

        <TreeNode icon={<Icon type="alert" />} title="开发" key="0-0-1">
          <TreeNode
            icon={({ selected }) => (
              <Icon type={selected ? "check" : "file-word"} />
            )}
            title="包二"
            key="0-0-1-0"
          />

          <TreeNode
            icon={({ selected }) => <Icon type={selected ? "check" : "more"} />}
            title="秦一"
            key="0-0-1-1"
          />
        </TreeNode>
        <TreeNode icon={<Icon type="account-book" />} title="财务" key="0-0-2">
          <TreeNode
            icon={({ selected }) => (
              <Icon type={selected ? "check" : "money-collect"} />
            )}
            title="魏十"
            key="0-0-2-0-0"
          />
          <TreeNode
            icon={({ selected }) => (
              <Icon type={selected ? "check" : "property-safety"} />
            )}
            title="托尼"
            key="0-0-2-0-1"
          />
          <TreeNode
            icon={({ selected }) => (
              <Icon type={selected ? "check" : "dollar"} />
            )}
            title="迪丽热巴"
            key="0-0-2-0-2"
          />
        </TreeNode>
      </TreeNode>
    </Tree>
  );
}
function UTable() {
  const columns = [
    {
      label: "入职日期",
      prop: "date",
      width: 180,
    },
    {
      label: "员工姓名",
      prop: "name",
      width: 180,
    },
    {
      label: "家庭地址",
      prop: "address",
    },
  ];
  const data = [
    {
      date: "2016-05-02",
      name: "张三",
      address: "南京市江宁区金沙江路 1518 弄",
    },
    {
      date: "2020-05-04",
      name: "李四",
      address: "无锡市惠山区金沙江路 1517 弄",
    },
    {
      date: "2019-07-01",
      name: "王五",
      address: "南京市玄武区金沙江路 1519 弄",
    },
    {
      date: "2018-11-03",
      name: "石六",
      address: "南京市栖霞区金沙江路 1516 弄",
    },
  ];
  return (
    <Table
      style={{ width: "100%" }}
      columns={columns}
      data={data}
      stripe={true}
    />
  );
}
class pSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          label: "部门",
          prop: "date",
          width: 180,
        },
        {
          label: "姓名",
          prop: "name",
          width: 180,
        },
        {
          label: "地址",
          prop: "address",
        },
      ],
      data: [
        {
          date: "人力资源",
          name: "张三",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  }
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
          <UTable />
        </div>
      </div>
    );
  }
}
export default pSearch;
