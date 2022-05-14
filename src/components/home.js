import React, { useEffect, useState } from "react";
import { Layout, Breadcrumb, Card, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getitems } from "../redux/actions/actions";
import axios from "axios";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const Home = () => {
  const items = useSelector((state) => state.allitems.items);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .catch((err) => {
        console.log("Err: ", err);
      });
    //   console.log("response data",response.data.meals);
    dispatch(getitems(response.data.meals));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("items", items);
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item><h1>Meals List</h1></Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Row gutter={16}>
              {items.map((item)=>(
                <Col span={6} key={item.idMeal}>
                    <Link to={`/selecteditem/${item.idMeal}`}>
                    <Card
                  hoverable
                  style={{ width: 300,margin:'1%' }}
                  cover={
                    <img
                      alt="example"
                      src={item.strMealThumb}
                    />
                  }
                >
                    <div>
                        <p>{item.strMeal}</p>
                    </div>
                  <Meta
                    title={item.strCategory}
                    description={item.strArea}
                  />
                </Card>
                    </Link>
              
              </Col>
              ))}
          
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
