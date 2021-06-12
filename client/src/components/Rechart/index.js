import './index.css';
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  // ComposedChart,
  // Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function Chart(props) {
  // console.log("props", props)
  // console.log("props length", props.length)
  const info = [];
  info.push(props.info)
  console.log("info", info)

    return (
    <ResponsiveContainer width="100%" height={400}>
    <BarChart
      width={500}
      height={300}
      data={info}
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
      <Bar dataKey="costOfLiving" stackId="a" fill="#8884d8" />
      <Bar dataKey="avgCostOfLiving" stackId="a" fill="#d4d844" />
      <Bar dataKey="providerCount" stackId="b" fill="#84add8" />
      <Bar dataKey="avgProviderCount" stackId="b" fill="#d8af84" />
      <Bar dataKey="avgPrice" stackId="c" fill="#aa84d8" />
      <Bar dataKey="avgAvgPrice" stackId="c" fill="#b2d884" />
    </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;