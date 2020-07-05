import { Icon, Table, Input, Button } from "antd";
import Highlighter from "react-highlight-words";
import { Tabs } from "element-react";
import "element-theme-default";
import React from "react";

const data = [
  {
    key: "1",
    notice: "关于武汉轻工大学",
    name: "baorong",
    time: "2020-01-09"
  },
  {
    key: "2",
    notice: "关于数字媒体技术",
    name: "数媒",
    time: "2020-01-09"
  },
  {
    key: "3",
    notice: "关于数学与计算机学院",
    name: "rongbao",
    time: "2020-01-09"
  },
  {
    key: "4",
    notice: "关于湖北省武汉市",
    name: "Jim Red",
    time: "2020-01-09"
  },
  {
    key: "5",
    notice: "关于江苏省南京市",
    name: "Bao",
    time: "2020-01-09"
  }
];

class TableCon extends React.Component {
  state = {
    searchText: "",
    searchedColumn: ""
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          搜索
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          重置
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "公告",
        dataIndex: "notice",
        key: "notice",
        width: "60%",
        ...this.getColumnSearchProps("notice")
      },
      {
        title: "发布者",
        dataIndex: "name",
        key: "name",
        width: "20%",
        ...this.getColumnSearchProps("name")
      },
      {
        title: "创建日期",
        dataIndex: "time",
        key: "time",
        ...this.getColumnSearchProps("time")
      }
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}
function NTable() {
  const labelOne = (
    <span>
      <Icon type="bell" /> 全部公告
    </span>
  );
  const labelTwo = (
    <span>
      <Icon type="eye-invisible" /> 未读公告
    </span>
  );

  return (
    <Tabs type="border-card" activeName="1">
      <Tabs.Pane label={labelOne} name="1">
        <TableCon />
      </Tabs.Pane>
      <Tabs.Pane label={labelTwo} name="2"></Tabs.Pane>
    </Tabs>
  );
}

class newsNotice extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginLeft: 10 }}>
          <NTable />
        </div>
      </div>
    );
  }
}
export default newsNotice;
