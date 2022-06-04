import React from "react";
import { Menu } from "antd";
import { faHome,faEdit,faUser,faWrench } from "@fortawesome/pro-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RightNav=()=>{
return(
  <Menu mode="horizontal">
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
  </Menu>
)
}

export default RightNav;