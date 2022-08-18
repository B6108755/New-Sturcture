import {
  VideoCameraOutlined,
  AimOutlined,
  FolderOpenOutlined,
  HeatMapOutlined,
  SnippetsOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AlarmMonitor } from "../pages/AlarmMonitor";
import { VideoWall } from "../pages/VideoWall";
type Props = {};
const { Header, Content, Sider } = Layout;
export const Navigate = (props: Props) => {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    // let path = `newPath`;
    navigate(`/${path}`);
  };
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <Layout className=" max-w-full mx-auto">
      <Header className="bg-[#140e0d] h-[8vh]">
        <p className="text-red-600 mx-auto text-lg mt-4">
          Fire & Security System
        </p>
      </Header>
      <Layout className="flex text-center h-[91vh]">
        <Sider className="bg-slate-800">
          <p className="text-white mt-4">Friday, October 21,2022</p>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={({ item, key, keyPath, domEvent }) => {
              console.log(key);
              routeChange(key);
            }}
            items={[
              {
                key: "mapInterface",
                icon: <HeatMapOutlined />,
                label: "Map Interface",
              },
              {
                key: "alarmMonitor",
                icon: <AimOutlined />,
                label: "Alarm Monitor",
              },
              {
                key: "informationLink",
                icon: <FolderOpenOutlined />,
                label: "Information Link",
              },
              {
                key: "videoWallIntegration",
                icon: <VideoCameraOutlined />,
                label: "Video Wall Integration",
              },
              {
                key: "eventNotification",
                icon: <ScheduleOutlined />,
                label: "Event Notification",
              },
              {
                key: "report",
                icon: <SnippetsOutlined />,
                label: "Report",
              },
            ]}
          />
        </Sider>
        <Content className=" bg-black">
          <Routes>
            <Route path="/alarmMonitor" element={<AlarmMonitor />}></Route>
            <Route path="/videoWallIntegration" element={<VideoWall />}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
