// import d3 from "../img/3D.png";
import React, { useState } from "react";
import { Button, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import "antd/dist/antd.css";
import { Col, Row, Progress } from "antd";
import { Input } from "antd";
import {
  VideoCameraOutlined,
  AlertOutlined,
  ExclamationCircleOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { ProgessModiflie, StyledButton } from "../antdCostom/ProgessModifle";
type Props = {};
const { Search } = Input;
const onSearch = (value: string) => console.log(value);
type TabPosition = "left" | "right" | "top" | "bottom";
const d3 = require("../img/3D.png");
export const AlarmMonitor = (props: Props) => {
  const [mode, setMode] = useState<TabPosition>("top");
  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };
  return (
    <Row className=" text-white">
      <Col xl={8} className=" w-full mt-0 mx-auto text-center  flex-col">
        <div className=" bg-transparent mx-5">
          <div className="bg-transparent rounded h-10 pt-1 mt-5 mb-2">
            <Radio.Group
              onChange={handleModeChange}
              value={mode}
              className="flex w-full"
            >
              <Radio.Button
                className="w-1/2"
                style={{ backgroundColor: "#b55028" }}
                value="1"
              >
                Single AlarDm
              </Radio.Button>
              <Radio.Button
                className="w-1/2 "
                style={{ backgroundColor: "#5c2c1a" }}
                value="2"
              >
                Multi Map
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className=" bg-slate-800 rounded h-10 pt-2">
            Overview alram monitoring
          </div>
          <div className="bg-slate-800 rounded h-[220px] my-3 py-3 px-3">
            <Search
              className=" rounded"
              placeholder="Arrival Hall"
              allowClear
              onSearch={onSearch}
            ></Search>
            <Row className=" my-5 mx-auto justify-between px-auto">
              <Col xl={8}>
                <div className="w-full">
                  <ProgessModiflie
                    className="w-auto"
                    type="circle"
                    percent={64}
                    strokeColor="red"
                    trailColor="blue"
                    strokeWidth={7}
                  />
                </div>

                <p className="mt-1">Completion rate</p>
              </Col>
              <Col xl={8}>
                <ProgessModiflie
                  type="circle"
                  percent={30}
                  strokeColor="red"
                  trailColor="blue"
                  format={() => "Low"}
                  strokeWidth={7}
                />
                <p className="mt-1">Single Alarm</p>
              </Col>
              <Col xl={8}>
                <ProgessModiflie
                  type="circle"
                  percent={90}
                  strokeColor="red"
                  trailColor="blue"
                  format={() => "High"}
                  strokeWidth={7}
                />
                <p className="mt-1">Multi map alarm</p>
              </Col>
            </Row>
          </div>
          <div className=" bg-slate-800 rounded h-10 pt-2 w-full">
            <p className=" text-left pl-6">
              The total number of problems with alarms.
            </p>
          </div>
          <div className=" bg-slate-800 rounded h-full py-3 px-3 pt-3 w-full my-3">
            <Search
              className=" rounded"
              placeholder="Seach"
              allowClear
              onSearch={onSearch}
            ></Search>
            <div className=" py-3">
              <Row gutter={1} className=" pb-3">
                <Col xl={3}>Zone A</Col>
                <Col xl={10}>
                  <span className="ml-3" style={{ color: "blue" }}>
                    (Fire alarm signle tody)
                  </span>
                </Col>
                <Col xl={8}>
                  <div className="h-0.5 w-px ml-20 mb-2.5">
                    <Progress
                      width={25}
                      type="circle"
                      percent={50}
                      format={() => " "}
                      strokeWidth={9}
                    />
                  </div>
                </Col>
                <Col xl={3}>
                  <span>50%</span>
                </Col>
              </Row>
              <Row gutter={1}>
                <Col xl={3}>Zone B</Col>
                <Col xl={10}>
                  <span className="ml-3" style={{ color: "blue" }}>
                    (Fire alarm signle tody)
                  </span>
                </Col>
                <Col xl={8}>
                  <div className="h-0.5 w-px ml-20 mb-2.5">
                    <ProgessModiflie
                      width={25}
                      type="circle"
                      percent={13}
                      strokeColor="red"
                      format={() => " "}
                      strokeWidth={9}
                    />
                  </div>
                </Col>
                <Col xl={3}>
                  <span>13%</span>
                </Col>
              </Row>
              <Row gutter={1} className=" py-3">
                <Col xl={3}>Zone C</Col>
                <Col xl={10}>
                  <span className="ml-3" style={{ color: "blue" }}>
                    (Fire alarm signle tody)
                  </span>
                </Col>
                <Col xl={8}>
                  <div className="h-0.5 w-px ml-20 mb-2.5">
                    <Progress
                      width={25}
                      type="circle"
                      percent={37}
                      strokeColor="yellow"
                      format={() => " "}
                      strokeWidth={9}
                    />
                  </div>
                </Col>
                <Col xl={3}>
                  <span>37%</span>
                </Col>
              </Row>
              <Row gutter={1}>
                <Col xl={3}>Zone D</Col>
                <Col xl={10}>
                  <span className="ml-3" style={{ color: "blue" }}>
                    (Fire alarm signle tody)
                  </span>
                </Col>
                <Col xl={8}>
                  <div className="h-0.5 w-px ml-20 mb-2.5">
                    <Progress
                      width={25}
                      type="circle"
                      percent={50}
                      strokeColor="pink"
                      format={() => " "}
                      strokeWidth={9}
                    />
                  </div>
                </Col>
                <Col xl={3}>
                  <span>50%</span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={16}>
        <Row className=" justify-between h-[90px] mt-5">
          <Col xl={8}>
            <p className="bg-slate-800 rounded h-full pt-4 mr-2">
              <AlertOutlined className="pr-4" />
              Alarm in the area
              <h1 className=" text-gray-500 pt-2">
                4,198 <span>(Price)</span>
              </h1>
            </p>
          </Col>
          <Col xl={8}>
            <p className="bg-slate-800 rounded h-full pt-4 mx-2">
              <VideoCameraOutlined className="pr-4" />
              fire alarm malfunction
              <h1 className=" text-gray-500 pt-2">
                2,012 <span>(Price)</span>
              </h1>
            </p>
          </Col>
          <Col xl={8}>
            <p className="bg-slate-800 rounded h-full pt-4 mx-2 mr-1">
              <ExclamationCircleOutlined className="pr-4" />
              fire alram not working
              <h1 className=" text-gray-500 pt-2">
                1,008 <span>(Price)</span>
              </h1>
            </p>
          </Col>
        </Row>
        <div className=" flex justify-center">
          <img src={d3} className="w-[70%]"></img>
        </div>
      </Col>
    </Row>
  );
};
