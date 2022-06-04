import React, { useEffect, useState,useRef,useReducer } from "react";
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
  Space
} from "antd";
import { faPencil,faTrash } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const initialValues={
    sno:"",
    name:"",
    qualification:"",
}
const initialList={
    student_data:[]
}
function reducer(state,action){
    switch (action.type){
        case "ADD_STUDENT":
            const updatestudent=[...state.student_data,action.payload];
            return{
                ...state,
                student_data:updatestudent
            }
        case "DELET_STUDENT":
            const removedata=[...action.payload];
            return{
                student_data:removedata
            }
            break;
            default:
                return state;
    }
}
const StudentForm = () => {
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
        {
          title: 'Action',
          key: 'action',
          width: '20%',
      
          render: (text, record) => (
            <Space size="middle">
              <FontAwesomeIcon icon={faTrash} style={{ fontSize: 15, color: 'red ' }} onClick={()=>removedata(record.sno)} />
            </Space>
          ),
        },
      ];
  const [form] = Form.useForm();
  const [isvisible, Setisivisible] = useState(false);
  const [studentform,SetStudentform]=useState(initialValues);
  const [state,dispatch]=useReducer(reducer,initialList)
  const data=state.student_data.map(item=>item);
  const refstudent=useRef();
  const toggleopen = () => {
    Setisivisible(true);
  };
  const handleOk = () => {
    Setisivisible(false);
  };

  const handleCancel = () => {
    Setisivisible(false);
  };
  const handlechange=(e)=>{
  SetStudentform({
      ...studentform,
      [e.target.name]:e.target.value
  })
  }
  const onFinish = (values) => {
    alert("Successfull Register Studentdata");
    console.log("Success:", values);
    SetStudentform(values);
    dispatch({type:"ADD_STUDENT",payload:studentform});
    form.resetFields();
    Setisivisible(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const removedata=(id)=>{
      console.log("edata",id);
    let filteredArray = data.filter(item => item.sno !== id);
    console.log("deletedata",filteredArray);
    dispatch({type:"DELET_STUDENT",payload:filteredArray})
  }

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
              <p>{JSON.stringify(state)}</p>
            <Table
              dataSource={data}
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
              <Input name="sno" onChange={handlechange} />
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
              <Input name="name" onChange={handlechange} />
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
                <Input name="qualification" onChange={handlechange} />
              {/* <Select
                placeholder="Select a option and change input text above"
                onChange={handlechange}
                allowClear
              >
                <Option value="ug">BCA</Option>
                <Option value="pg">MCA</Option>
                <Option value="mphil">Mphil</Option>
              </Select> */}
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

export default StudentForm;
