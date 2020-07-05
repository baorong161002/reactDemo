import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

function CardOne() {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card
          title="****-人力资源-考勤（5）"
          bordered={false}
          style={{
            width: 250,
            borderTop: "4px solid #12a182"
          }}
          hoverable={true}
        >
          <a
            href="http://www.baidu.com"
            style={{ color: "rgba(0, 0, 0, 0.65)" }}
          >
            <p>出差申请</p>
          </a>
          <p>公出申请</p>
          <p>请休假申请</p>
          <Link to="/procedure/form" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
            <p>加班申请</p>
          </Link>
          <p>考勤异常申请</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title="****-请示（2）"
          bordered={false}
          style={{ width: 250, borderTop: "4px solid #ed5a65" }}
          hoverable={true}
        >
          <Link to="/procedure/RAForm" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
            <p>接待申请表</p>
          </Link>

          <p>请示会签流程</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title="****-人力资源-用工（6）"
          bordered={false}
          style={{ width: 250, borderTop: "4px solid #4f383e" }}
          hoverable={true}
        >
          <p>入职确认流程（劳务）</p>
          <Link
            to="/procedure/EntryConfirmForm"
            style={{ color: "rgba(0, 0, 0, 0.65)" }}
          >
            <p>入职确认流程（全职）</p>
          </Link>

          <p>异动流程</p>
          <p>员工离职申请</p>
          <p>员工转正申请</p>
          <p>招聘需求申请</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title="****-财务-费用报销申请流程（7）"
          bordered={false}
          style={{ width: 300, borderTop: "4px solid #525288" }}
          hoverable={true}
        >
          <p>差旅费报销单</p>
          <p>冲抵预付账款申请单</p>
          <Link to="/procedure/ERForm" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
            <p>费用报销单</p>
          </Link>
          <p>费用分摊报销单</p>
          <p>联盟费用审批</p>
          <p>人力成本报销单</p>
          <p>无形资产报销单</p>
        </Card>
      </Col>
    </Row>
  );
}
class procedurelist extends React.Component {
  render() {
    return (
      <div className="CardHeader">
        <div style={{ width: "100%", height: "70%" }}>
          <CardOne />
        </div>
      </div>
    );
  }
}

export default procedurelist;
