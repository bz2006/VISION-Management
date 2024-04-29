import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";


const data = [
  {
    name: "Page A",
    uv: 2000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 4000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1090,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 4490,
    pv: 4300,
    amt: 2100
  }
];
const cardinal = curveCardinal.tension(0.2);

export default function Chart() {
  return (
    <AreaChart
      width={950}
      height={400}
      data={data}
    >
     
      <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
      <YAxis tick={{ fill: "#ffffff" }}/>
      <Tooltip />
      <Area
        dataKey="uv"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      />
      <Area
        type={cardinal}
        dataKey="uv"
        stroke="#008b09"
        strokeWidth={2}
        fill="#00b3ff"
        fillOpacity={0.7}
      />
    </AreaChart>
  );
}



