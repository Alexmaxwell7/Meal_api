import React from "react";
import './task.css';
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
    Space,
    Menu
  } from "antd";
  import { faHome,faEdit,faUser,faWrench } from "@fortawesome/pro-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Leftmenu from "./leftnav";
  import RightNav from "./rightnav";
  const { Header, Content, Footer } = Layout;
const { Option } = Select;
const Task=()=>{
    return(
       <Layout>
           <Header style={{position:'fixed',zIndex:1,width:'100%',background:'#fff'}}>
                {/* expected output */}
               <div className="logo" />
               <div className="menuCon">
                   <div className="leftMenu">
                        <Leftmenu/>
                   </div>
                   <div className="rightMenu">
                         <RightNav/>
                   </div>
               </div>
               {/* try to other way  */}
               {/* <Menu theme="light" mode="horizontal" style={{lineHeight:'64px'}}>
                   <Menu.Item key="1">SFE KPI</Menu.Item>
                   <Menu.Item key="2">Marketing KPI</Menu.Item>
                   <Menu.Item key="3">Sales KPI</Menu.Item>
                   <Menu.Item key="4">Training KPI</Menu.Item>
                   <Menu.Item key="5">
                   <FontAwesomeIcon
            icon={faWrench}
            style={{ fontSize: 15, color: 'Blue' }}
          />&nbsp;Settings</Menu.Item>
                   <Menu.Item key="6"><FontAwesomeIcon
            icon={faHome}
            style={{ fontSize: 15, color: 'red ' }}
          />&nbsp;Home</Menu.Item>
                   <Menu.Item key="7">
                   <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: 15, color: 'green' }}
          />&nbsp;Logout</Menu.Item>
               </Menu> */}
               {/* <div className="right">
                   <Menu>
                   <Menu.Item key="4">settings</Menu.Item>
                   </Menu>
               </div> */}
           </Header>
       </Layout>
    )
}

export default Task;