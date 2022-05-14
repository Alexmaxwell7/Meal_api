import React, { useEffect, useState } from "react";
import {
  Layout,
  Breadcrumb,
  Card,
  Row,
  Col,
  Button,
  Form,
  Input,
  InputNumber,
} from "antd";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const formlayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const Shipping = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order_data= location.state.item;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    alert("Successfull Register Shipping Details now Proceed  to purchase");
    console.log("Success:", values);
    localStorage.setItem('userdata',JSON.stringify(values));
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <h1>Shipping Details</h1>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={12}>
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
                label="First Name"
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Missing details!",
                  },
                ]}
              >
                <Input name="firstname" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Missing details",
                  },
                ]}
              >
                <Input name="lastname" />
              </Form.Item>
              <Form.Item
                label="Mobile Number"
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: "Missing details",
                  },
                ]}
              >
                <InputNumber name="mobile" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Missing details",
                  },
                ]}
              >
                <Input name="address" />
              </Form.Item>
              <Form.Item
                label="Pincode"
                name="pincode"
                rules={[
                  {
                    required: true,
                    message: "Missing details",
                  },
                ]}
              >
                <InputNumber name="pincode" style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Save Shipping Address
                </Button>&nbsp;
                <Button type="primary" size="default" onClick={()=>navigate('/purchase',{state:{order_data}}, { replace: true })}>
                 Purchase
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col xs={24} sm={24} md={12}>
            <Card headStyle={false}>
              <div style={{ textAlign: "center" }}>
                <img
                  alt="example"
                  src={location.state.item.strMealThumb}
                  style={{ width: "30%" }}
                />
              </div>
              <Row gutter={10} style={{marginTop:'2%'}}>
                <Col xs={12} md={12}>
                  <p>Meal Name:</p>
                </Col>
                <Col xs={12} md={12}>
                  <p>
                    <strong>{location.state.item.strMeal}</strong>
                  </p>
                </Col>
                <Col xs={12} md={12}>
                  <p>Category:</p>
                </Col>
                <Col xs={12} md={12}>
                  <p>
                    <strong>{location.state.item.strCategory}</strong>
                  </p>
                </Col>
                <Col xs={12} md={12}>
                  <p>Meal Area:</p>
                </Col>
                <Col xs={12} md={12}>
                  <p>
                    <strong>{location.state.item.strArea}</strong>
                  </p>
                </Col>
                <Col xs={12} md={12}>
                  <p>Meal Tags:</p>
                </Col>
                <Col xs={12} md={12}>
                  <p>
                    <strong>{location.state.item.strTags}</strong>
                  </p>
                </Col>
              </Row>
            </Card>
            {/* <Card
              hoverable
              style={{ width: 300, margin: "1%" }}
              cover={<img alt="example" src={location.state.item.strMealThumb} />}
            >
              <div>
                <p>{location.state.item.strMeal}</p>
              </div>
              <Meta title={location.state.item.strCategory} description={location.state.item.strArea} />
            </Card> */}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Shipping;
