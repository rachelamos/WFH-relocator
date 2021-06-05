// import logo from './logo.svg';
import './Rechart.css';
// import "./styles.css";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// import COLData from "../../../scripts/seed_citybb";

const data = [
  {
    name: "San Francisco, CA",
    costOfLiving: 93.35,
    // pv: 2400,
    // amt: 2400
  },
  {
    name: "Austin, TX",
    costOfLiving: 63.04,
    // pv: 1398,
    // amt: 2210
  },
  {
    name: "Dallas, TX",
    costOfLiving: 64.80,
    // pv: 9800,
    // amt: 2290
  },
  {
    name: "Washington, DC",
    costOfLiving: 84.39,
    // pv: 3908,
    // amt: 2000
  },
  {
    name: "Raleigh, NC",
    costOfLiving: 71.18,
    // pv: 4800,
    // amt: 2181
  },
  {
    name: "San Jose, CA",
    costOfLiving: 78.55,
    // pv: 3800,
    // amt: 2500
  },
  {
    name: "Charlotte, NC",
    costOfLiving: 72.66,
    // pv: 4300,
    // amt: 2100
  },
  {
    name: "Seattle, WA",
    costOfLiving: 89.48,
    // pv: 4300,
    // amt: 2100
  },
  {
    name: "Atlanta, GA",
    costOfLiving: 76.22,
    // pv: 4300,
    // amt: 2100
  },
  {
    name: "Huntsville, AL",
    costOfLiving: 64.98,
    // pv: 4300,
    // amt: 2100
  },
  {
    name: "Denver, CO",
    costOfLiving: 73.96,
    // pv: 4300,
    // amt: 2100
  },
  {
    name: "New York, NY",
    costOfLiving: 100,
    // pv: 4300,
    // amt: 2100
  },
  {
    name: "Chicago, IL",
    costOfLiving: 80.38,
    // pv: 4300,
    // amt: 2100
  }
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="costOfLiving" fill="#8884d8" />
    </BarChart>
    </ResponsiveContainer>
  );
}

