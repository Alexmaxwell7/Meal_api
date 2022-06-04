import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Layout,
  Breadcrumb,
  Card,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
const { Header, Content, Footer } = Layout;
const { Option } = Select;
const formlayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const dataSource = [
  {
    key: "1",
    sno: "1",
    name: "santhosh",
    qualification: "MBA",
  },
  {
    key: "2",
    sno: "2",
    name: "ajith",
    qualification: "MCA",
  },
];

const columns = [
  {
    title: "S.No",
    dataIndex: "sno",
    key: "sno",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Qualification",
    dataIndex: "qualification",
    key: "qualification",
  },
];
const Demo = () => {
  const [form] = Form.useForm();
  const [isvisible, Setisivisible] = useState(false);
  const [studentdata,SetStudendata]=useState([]);
  const [update,setUpdate]=useState(0);
  const toggleopen = () => {
    Setisivisible(true);
  };
  const handleOk = () => {
    Setisivisible(false);
  };

  const handleCancel = () => {
    Setisivisible(false);
  };
  const onFinish = (values) => {
    alert("Successfull Register Studentdata");
    console.log("Success:", values);
    localStorage.setItem("studentdata", JSON.stringify(values));
    setUpdate(update+1);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(()=>{
    let user=JSON.parse(localStorage.getItem('studentdata'));
    console.log('studentdata',user)
    SetStudendata([user]);
  },[update])
  console.log('arraydata',studentdata);
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <h1>Table Details</h1>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div>
          <Row gutter={20}>
            <Col xs={24} md={12}>
              <h1>Student Qualification</h1>
            </Col>
            <Col xs={24} md={12}>
              <Button type="primary" onClick={toggleopen}>
                Add
              </Button>
            </Col>
          </Row>
        </div>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24}>
            <Table
              dataSource={studentdata}
              columns={columns}
              pagination={false}
            />
          </Col>
        </Row>
        <Modal
          title="Student Details"
          visible={isvisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            preserve={false}
            {...formlayout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="S.no"
              name="sno"
              rules={[
                {
                  required: true,
                  message: "Missing details!",
                },
              ]}
            >
              <Input name="sno" />
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Missing details",
                },
              ]}
            >
              <Input name="name" />
            </Form.Item>
            <Form.Item
              label="Qualification"
              name="qualification"
              rules={[
                {
                  required: true,
                  message: "Missing details",
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="ud">BCA</Option>
                <Option value="pg">MCA</Option>
                <Option value="mphil">Mphil</Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default Demo;
