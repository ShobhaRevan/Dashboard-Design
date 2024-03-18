import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  Layout,
  Menu,
  Row,
  Col,
  Dropdown,
  Tag,
  Card,
  Button,
  Divider,
} from "antd";
import { PiChartLineUp, PiChartLineDownFill } from "react-icons/pi";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  MenuUnfoldOutlined,
  TeamOutlined,
  SettingOutlined,
  GitlabOutlined,
  BarChartOutlined,
  PartitionOutlined,
  ApiOutlined,
  ContactsOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { BarChart } from "@mui/x-charts";
import { Flex, Progress } from "antd";
import "../Css/Dashboard.css";

const { Content, Sider } = Layout;

const Dashboard = () => {
  const items2 = [
    {
      title: <span style={{ fontSize: "20px" }}>Salesway</span>,
      icon: <GitlabOutlined style={{ fontSize: "25px" }} />,
      key: "sub1",
      options: [
        { key: "sub1-1", label: "Setting", icon: <SettingOutlined /> },
        { key: "sub1-2", label: "Team", icon: <TeamOutlined /> },
      ],
    },
    {
      title: "Menu",
      key: "sub2",
      options: [
        { key: "sub2-1", label: "Dashboard", icon: <MenuUnfoldOutlined /> },
        { key: "sub2-2", label: "Compaigns", icon: <BarChartOutlined /> },
        { key: "sub2-3", label: "Flows", icon: <PartitionOutlined /> },
        { key: "sub2-4", label: "Integrations", icon: <ApiOutlined /> },
        { key: "sub2-5", label: "Customers", icon: <ContactsOutlined /> },
      ],
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="lastYear">Last Year</Menu.Item>
      <Menu.Item key="presentYear">Present Year</Menu.Item>
      <Menu.Item key="lastMonth">Last Month</Menu.Item>
      <Menu.Item key="presentMonth">Present Month</Menu.Item>
    </Menu>
  );

  const cardData = [
    {
      title: "Purchases",
      value: "4,294",
      tagColor: "green",
      tagBgColor: "#bee8be",
      tagContent: "+32%",
      icon: <PiChartLineUp />,
    },
    {
      title: "Revenue",
      value: "$322, 3k",
      tagColor: "green",
      tagBgColor: "#bee8be",
      tagContent: "+49%",
      icon: <PiChartLineUp />,
    },
    {
      title: "Refund",
      value: "$8, 2k",
      tagColor: "brown",
      tagBgColor: "#fababa",
      tagContent: "+7%",
      icon: <PiChartLineDownFill />,
    },
  ];

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text, record) => (
        <span>
          <img
            src={record.image}
            alt={text}
            style={{
              marginRight: "8px",
              width: "24px",
              height: "24px",
              borderRadius: "5px",
            }}
          />
          {text}
        </span>
      ),
    },
    {
      title: "Sold amount",
      dataIndex: "soldamount",
      key: "soldamount",
    },
    {
      title: "Unit price",
      dataIndex: "unitprice",
      key: "unitprice",
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
  ];

  const data = [
    {
      key: "1",
      product: "Camera Mi 360°",
      image:
        "https://img.freepik.com/free-photo/beauty-products-recipients-assortment-grey-stones_23-2148761390.jpg?w=996&t=st=1710674547~exp=1710675147~hmac=c7af1427e4b860876ddefd0361618eb604f7add886c0e9c4289d75942e7322ed",
      soldamount: 432,
      unitprice: "$120",
      revenue: "$51,840",
      rating: "⭐4.81",
    },
    {
      key: "2",
      product: "Massage Gun",
      image:
        "https://img.freepik.com/free-photo/beauty-products-recipients-assortment-grey-stones_23-2148761390.jpg?w=996&t=st=1710674547~exp=1710675147~hmac=c7af1427e4b860876ddefd0361618eb604f7add886c0e9c4289d75942e7322ed",
      soldamount: 120,
      unitprice: "$112",
      revenue: "$25,440",
      rating: "⭐3.44",
    },
    {
      key: "3",
      product: "Vacuum-Mop 2 Pro",
      image:
        "https://img.freepik.com/free-photo/beauty-products-recipients-assortment-grey-stones_23-2148761390.jpg?w=996&t=st=1710674547~exp=1710675147~hmac=c7af1427e4b860876ddefd0361618eb604f7add886c0e9c4289d75942e7322ed",
      soldamount: 221,
      unitprice: "$320",
      revenue: "$15,123",
      rating: "⭐3.22",
    },
    {
      key: "4",
      product: "Vacuum-Mop 2",
      image:
        "https://img.freepik.com/free-photo/beauty-products-recipients-assortment-grey-stones_23-2148761390.jpg?w=996&t=st=1710674547~exp=1710675147~hmac=c7af1427e4b860876ddefd0361618eb604f7add886c0e9c4289d75942e7322ed",
      soldamount: 223,
      unitprice: "$234",
      revenue: "$32,812",
      rating: "⭐3.00",
    },
  ];

  const [connectNulls] = React.useState(true);

  return (
    <Layout>
      <Sider
        width={220}
        style={{
          background: "rgb(240, 242, 245)",
          borderRadius: "20px",
          height: "100vh",
        }}
      >
        <Menu
          style={{ backgroundColor: "rgb(240, 242, 245)", fontWeight: "bold" }}
          mode="inline"
          defaultOpenKeys={items2.map((item) => item.key)}
        >
          {items2.map(({ title, icon, key, options }) => (
            <React.Fragment key={key}>
              <Menu.Item key={key} icon={icon}>
                {title}
              </Menu.Item>
              {options.map(({ key, label, icon }) => (
                <Menu.Item key={key} icon={icon} style={{ paddingLeft: 40 }}>
                  {label}
                </Menu.Item>
              ))}
            </React.Fragment>
          ))}
        </Menu>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "30%",
            padding: "16px",
          }}
        >
          {" "}
          <span>
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710685182~exp=1710685782~hmac=a0e178a379ef5364e8582014e780618614461cbe6458fed7845117d74b61c71a"
              alt="none"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <b> Tom Wang</b>
          </span>
        </div>
      </Sider>
      <Layout style={{ padding: "24px 24px 24px 24px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                background: "white",
                borderRadius: "20px",
              }}
            >
              <div className="component_one">
                <div className="component_one_header">
                  <Row>
                    <Col flex="auto">
                      <h3>Dashboard</h3>
                    </Col>
                    <Col flex="none">
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <h6 style={{ marginTop: "6px" }}>Compare to </h6>&nbsp;
                        <div
                          style={{
                            border: "1px solid #d9d9d9",
                            borderRadius: "20px",
                            padding: "5px",
                          }}
                        >
                          <Dropdown overlay={menu} trigger={["click"]}>
                            <a
                              style={{ color: "black", textDecoration: "none" }}
                              href="/"
                              className="ant-dropdown-link"
                              onClick={(e) => e.preventDefault()}
                            >
                              <span>Last Year</span> <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="component_one_cards">
                  <Row gutter={[16, 16]}>
                    {cardData.map((data, index) => (
                      <Col key={index} xs={24} sm={12} md={8} lg={8}>
                        <Card className="cmp_one_card">
                          <h6 style={{ color: "gray" }}>{data.title}</h6>
                          <h4>
                            {data.value}
                            <Tag
                              style={{
                                color: data.tagColor,
                                backgroundColor: data.tagBgColor,
                                borderRadius: "10px",
                                marginLeft: "8px",
                              }}
                            >
                              {data.tagContent} {data.icon}
                            </Tag>
                          </h4>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
              <div className="component_two">
                <div className="component_two_header">
                  <Row>
                    <Col flex="auto">
                      <h5>Comparison</h5>
                    </Col>
                    <Col flex="none">
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <div
                          style={{
                            border: "1px solid #d9d9d9",
                            borderRadius: "20px",
                            padding: "5px",
                          }}
                        >
                          <Dropdown overlay={menu} trigger={["click"]}>
                            <a
                              style={{ color: "black", textDecoration: "none" }}
                              href="/"
                              className="ant-dropdown-link"
                              onClick={(e) => e.preventDefault()}
                            >
                              <span>6 Months</span> <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="component_two_chart">
                  <div className="component_two_chart">
                    <BarChart
                      xAxis={[
                        {
                          scaleType: "band",
                          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        },
                      ]}
                      series={[
                        { data: [10, 20, 15, 40, 20, 10] },
                        { data: [20, 30, 18, 45, 35, 15] },
                      ]}
                      height={400}
                    />
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Col>
                        <h6>
                          <Button
                            style={{ backgroundColor: "#02B2AF" }}
                          ></Button>
                          &nbsp; This year
                        </h6>
                      </Col>
                      <Col>
                        <h6>
                          <Button
                            style={{ backgroundColor: "#2E96FF" }}
                          ></Button>
                          &nbsp;Last year
                        </h6>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className="component_six">
                <div className="component_six_header">
                  <Row>
                    <Col flex="auto">
                      <h5>Top Products</h5>
                    </Col>
                    <Col flex="none">
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Button
                          style={{
                            background: "rgb(240, 242, 245)",
                            borderRadius: "20px",
                          }}
                        >
                          Full Results
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="component_six_table">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                  />
                </div>
              </div>
            </Content>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div
              className="component_three"
              style={{ background: "white", borderRadius: "20px", padding: 24 }}
            >
              <Flex vertical gap="middle">
                <Flex align="center" wrap="wrap" gap={30}>
                  <Progress type="dashboard" percent={78} />
                </Flex>
              </Flex>
              <p style={{ color: "gray", textAlign: "center" }}>
                of 100 points
              </p>
              <Divider />
              <h5>
                <b>You're good!</b>
              </h5>
              <p style={{ color: "gray" }}>
                Your sales performance score is better than 80% other users
              </p>
              <Button style={{ borderRadius: "20px" }}>
                <strong>Improve your score</strong>
              </Button>
            </div>
            <div
              className="component_four"
              style={{
                background: "white",
                borderRadius: "20px",
                padding: 24,
                borderTop: "10px solid rgb(240, 242, 245)",
              }}
            >
              <h5>Customers by device</h5>
              <div className="component_four_linechart">
                <Stack sx={{ width: "100%" }}>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
                    series={[
                      {
                        data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
                      },
                      {
                        data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
                        connectNulls,
                        area: true,
                      },
                    ]}
                    height={200}
                    margin={{ top: 10, bottom: 20 }}
                  />
                  <Row
                    style={{
                      paddingTop: "10%",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Col>
                      <h6>
                        Web Sales&nbsp;
                        <Button style={{ backgroundColor: "#02B2AF" }}></Button>
                      </h6>
                      <h6>1,304%</h6>
                    </Col>
                    <Col>
                      <h6>
                        Offline selling&nbsp;
                        <Button style={{ backgroundColor: "#2E96FF" }}></Button>
                      </h6>
                      <h6>473%</h6>
                    </Col>
                  </Row>
                </Stack>
              </div>
            </div>
            <div
              className="component_six"
              style={{
                background: "white",
                borderRadius: "20px",
                padding: 24,
                borderTop: "10px solid rgb(240, 242, 245)",
              }}
            >
              <p style={{ color: "gray" }}>Community feedback</p>
              <h5>Mostly positive</h5>
              <div
                className="component_six_progressline"
                style={{ paddingTop: "5%" }}
              >
                <ProgressBar>
                  <ProgressBar variant="danger" now={16} key={1} />
                  <ProgressBar variant="warning" now={34} key={2} />
                  <ProgressBar variant="success" now={50} key={3} />
                </ProgressBar>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "5%",
                  }}
                >
                  <Col>
                    <p>Negative</p>
                    <h6>12</h6>
                  </Col>
                  <Col>
                    <p>Neutral</p>
                    <h6>34</h6>
                  </Col>
                  <Col>
                    <p>Positive</p>
                    <h6>134</h6>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
