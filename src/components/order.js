import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Layout,
  Breadcrumb,
  Card,
  Row,
  Col,
  Divider
} from "antd";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const Orderpurchase=()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const purchase_data= location.state.order_data;
    const user=JSON.parse(localStorage.getItem('userdata'));
    console.log("purchase",purchase_data);
    console.log("user",user);
    //refresh remove token and state
    const refresh=()=>{
        navigate('/',{state:null}, { replace: true });
        localStorage.clear();
    }

    return(
        <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <h1>Order Details</h1>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 style={{textAlign:'center'}}>Order Purchased</h1>
        <Row gutter={20}>
            <Col xs={24} sm={24} md={8}>
                <h1>Order Information</h1>
                <p>Order Id:&nbsp;<strong>2376889</strong></p>
                <p>Date:&nbsp;<strong>14/05/2022</strong></p>
            </Col>
            <Col xs={24} sm={24} md={8} style={{overflowX:'auto'}}>
                <h1>Billing Address</h1>
                <p>{user.firstname}</p>
                <p>{user.mobile}</p>
                <p>{user.address}</p>
                <p>{user.pincode}</p>
            </Col>
            <Col xs={24} sm={24} md={8} style={{overflowX:'auto'}}>
                <h1>Shipping Address</h1>
                <p>{user.firstname}</p>
                <p>{user.mobile}</p>
                <p>{user.address}</p>
                <p>{user.pincode}</p>
            </Col>
        </Row>
        <Divider/>
        <Row gutter={20}>
        <Col xs={24} sm={24} md={6}>Item Name</Col>
        <Col xs={24} sm={24} md={6}>Item Category</Col>
        <Col xs={24} sm={24} md={6}>Item Area</Col>
        <Col xs={24} sm={24} md={6}>Item Price</Col>
        </Row>
        <Divider/>
        <Row gutter={20} style={{marginBottom:'2%'}}>
        <Col xs={24} sm={24} md={6}><strong>{purchase_data.strMeal}</strong></Col>
        <Col xs={24} sm={24} md={6}><strong>{purchase_data.strCategory}</strong></Col>
        <Col xs={24} sm={24} md={6}><strong>{purchase_data.strArea}</strong></Col>
        <Col xs={24} sm={24} md={6}><strong>$100</strong></Col>
        </Row>
        </Content>
        </Layout>
    )
}
export default Orderpurchase;