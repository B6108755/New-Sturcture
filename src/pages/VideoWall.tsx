import { Mentions } from "antd";
import React, { useState } from "react";
import { Col, Divider, Row, Button, Input } from "antd";

type Props = {};
const { Option } = Mentions;
const { Search } = Input;
const MOCK_DATA = {
  "@": ["afc163", "zombiej", "yesmeck"],
  "#": ["1.0", "2.0", "3.0"],
};
const onSearch = (value: string) => console.log(value);

type PrefixType = keyof typeof MOCK_DATA;
export const VideoWall = (props: Props) => {
  return (
    <div className=" text-white w-[95%]">
      <div className="bg-slate-800 rounded h-44 mx-5 my-5 text-left pl-10">
        <h1 className="text-white text-xl pt-2 ">
          Video Wall Integration
          <p className=" italic text-gray-400 text-sm font-thin">
            Video Wall Integration
          </p>
          <div className="border-b border-gray-600 mr-10"></div>
        </h1>
        <h1 className="text-white text-xl pt-0 ">Network</h1>
        <div className="flex w-full">
          <Search
            className=" rounded mr-4"
            placeholder="Network"
            allowClear
            onSearch={onSearch}
          ></Search>
          <button className="w-[10%] mr-2 h-8 justify-center items-center bg-gray-500 hover:bg-gray-700 text-lg">
            Cancel
          </button>
          <button className="w-[10%] h-8 mr-10 justify-center items-center bg-red-500 hover:bg-red-700 text-lg">
            Seach
          </button>
        </div>
      </div>
      <Row gutter={[16, 0]} className="px-5 h-full">
        <Col xl={6} className="flex">
          <img
            className=" rounded"
            src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
          ></img>
          <p className=" text-slate-300">20238911</p>
        </Col>
        <Col xl={6} className="flex">
          <img
            className=" rounded"
            src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
          ></img>
          <p className=" text-slate-300">20238911</p>
        </Col>
        <Col xl={6} className="flex">
          <img
            className=" rounded"
            src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
          ></img>
          <p className=" text-slate-300">20238911</p>
        </Col>
        <Col xl={6} className="flex">
          <img
            className=" rounded"
            src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
          ></img>
          <p className=" text-slate-300">20238911</p>
        </Col>
      </Row>
      <Row gutter={[16, 0]} className="px-5 h-full">
        <Col xl={6} className="flex">
          <img
            className=" rounded"
            src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
          ></img>
          <p className=" text-slate-300">20238911</p>
        </Col>
        <Col xl={6} className="flex">
          <img
            className=" rounded"
            src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
          ></img>
          <p className=" text-slate-300">20238911</p>
        </Col>
        <Col xl={6} className="flex">
          <img
            className=" rounded"
            src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
          ></img>
          <p className=" text-slate-300">20238911</p>
        </Col>
        <Col xl={6} className="flex">
          <img
            className=" rounded"
            src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
          ></img>
          <p className=" text-slate-300">20238911</p>
        </Col>
      </Row>
    </div>
  );
};
