import React, { useEffect } from "react";
import axios from "axios";
import { Layout, Breadcrumb, Card, Row, Col,Button } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { itemdetails } from "../redux/actions/actions";
import {useNavigate} from "react-router-dom"
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const ItemDetails = () => {
  const { idMeal } = useParams();
  const navigate = useNavigate();
  console.log("mealid", idMeal);
  const item = useSelector((state) => state.selecteditem.items);
  const dispatch = useDispatch();
  const fetchProductDetail = async (idMeal) => {
    const response = await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(itemdetails(response.data.meals));
  };

  useEffect(() => {
    fetchProductDetail(idMeal);
  }, [idMeal]);
  console.log("selecteditem", item);
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item><h1>Item Details</h1></Breadcrumb.Item>
        </Breadcrumb>

        {item.map((item) => (
          <Card hoverable>
            <Row gutter={16}>
              <Col xs={24} lg={8}>
                <div className="product-details-box__left pdbl">
                  <figure>
                    <img
                      style={{ width: "70%" }}
                      src={item.strMealThumb}
                      alt=""
                    />
                  </figure>
                </div>
                <div>
                  <h1>Meal Details</h1>
                  <span>
                    Name: <strong>{item.strMeal}</strong>
                  </span>
                  &nbsp;
                  <span>
                    Category: <strong>{item.strCategory}</strong>
                  </span>
                  <span>
                    Area: <strong>{item.strArea}</strong>
                  </span>
                </div>
                <div style={{marginTop:'5%'}}>
                 <span> <Button type="primary" danger onClick={()=>navigate('/shipping',{state:{item}}, { replace: true })}>
                    Check Out
                  </Button></span>&nbsp;
                  <span>
                  <Button type="button"style={{backgroundColor:"green",color:'white'}}>
                    Add Cart
                  </Button>
                  </span>
                  <span> <Button type="primary" onClick={()=>navigate('/', { replace: true })}>
                    Home
                  </Button></span>
                
                </div>
                <div style={{marginTop:'5%'}}>
                    <span><strong>Youtube</strong>&nbsp;&nbsp;{item.strYoutube}</span>
                </div>
              </Col>
              <Col xs={24} lg={16}>
                <Row gutter={10}>
                  <Col xs={24} md={12}>
                    <h1>Ingredients</h1>
                    <div>
                      <p>
                        Ingredient1:&nbsp;&nbsp;
                        <strong>{item.strIngredient1}</strong>
                      </p>
                      <p>
                        Ingredient2:&nbsp;&nbsp;
                        <strong>{item.strIngredient2}</strong>
                      </p>
                      <p>
                        Ingredient3:&nbsp;&nbsp;
                        <strong>{item.strIngredient3}</strong>
                      </p>
                      <p>
                        Ingredient4:&nbsp;&nbsp;
                        <strong>{item.strIngredient4}</strong>
                      </p>
                      <p>
                        Ingredient5:&nbsp;&nbsp;
                        <strong>{item.strIngredient5}</strong>
                      </p>
                      <p>
                        Ingredient6:&nbsp;&nbsp;
                        <strong>{item.strIngredient6}</strong>
                      </p>
                      <p>
                        Ingredient7:&nbsp;&nbsp;
                        <strong>{item.strIngredient7}</strong>
                      </p>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <h1>Measurements</h1>
                    <div>
                      <p>
                        Measure1:&nbsp;&nbsp;<strong>{item.strMeasure1}</strong>
                      </p>
                      <p>
                        Measure2:&nbsp;&nbsp;
                        <strong>{item.strMeasure2}</strong>
                      </p>
                      <p>
                        strMeasure3:&nbsp;&nbsp;
                        <strong>{item.strMeasure3}</strong>
                      </p>
                      <p>
                        strMeasure4:&nbsp;&nbsp;
                        <strong>{item.strMeasure4}</strong>
                      </p>
                      <p>
                        strMeasure5:&nbsp;&nbsp;
                        <strong>{item.strMeasure5}</strong>
                      </p>
                      <p>
                        strMeasure6:&nbsp;&nbsp;
                        <strong>{item.strMeasure6}</strong>
                      </p>
                      <p>
                        strMeasure7:&nbsp;&nbsp;
                        <strong>{item.strMeasure7}</strong>
                      </p>
                    </div>
                  </Col>
                  <Col xs={24}>
                    <h1>Instructions:</h1>
                    <div style={{ textAlign: "justify" }}>
                      <p>{item.strInstructions}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        ))}
      </Content>
    </Layout>
  );
};

export default ItemDetails;
