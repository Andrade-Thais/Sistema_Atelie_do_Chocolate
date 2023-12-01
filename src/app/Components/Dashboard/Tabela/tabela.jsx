import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function Tabela() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={300} height={138} style={{ margin: "auto" }}>
      <Pie
        data={data}
        cx={150}
        cy={65}
        innerRadius={50}
        outerRadius={67}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        legendType=""
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
export default Tabela;
