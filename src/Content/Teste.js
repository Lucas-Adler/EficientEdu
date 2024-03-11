import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComponent = () => {
  const [data, setData] = useState([
    {name: 'Jan', value: 400},
    {name: 'Feb', value: 300},
    {name: 'Mar', value: 500},
    {name: 'Apr', value: 200},
    {name: 'May', value: 600},
    {name: 'Jun', value: 800},
  ]);

  const handleClick = () => {
    const newData = [
      ...data,
      { name: 'Jul', value: 900 },
    ];
    setData(newData);
  }

  return (
    <div>
      <button onClick={handleClick}>Add data</button>
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default ChartComponent;