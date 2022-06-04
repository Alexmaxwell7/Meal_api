import React from "react";
import { Menu } from "antd";
const Leftmenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="1">SFE KPI</Menu.Item>
      <Menu.Item key="2">Marketing KPI</Menu.Item>
      <Menu.Item key="3">Sales KPI</Menu.Item>
      <Menu.Item key="4">Training KPI</Menu.Item>
    </Menu>
  );
};

export default Leftmenu;
