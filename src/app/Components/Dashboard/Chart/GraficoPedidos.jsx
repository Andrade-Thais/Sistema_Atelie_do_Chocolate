import React, { useState, useEffect } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Tooltip,
  Legend,
} from "recharts";
import firebase from "../../../Config/firebase";

export default function GraficoPedidos() {
  const db = firebase.firestore();
  const [data, setData] = useState([]);

  const dataSample = [
    { name: "Concluídos", "Pedidos Concluídos": 4000 },
    { name: "Cancelados", "Pedidos Cancelados": 1000 },
  ];

  return (
    <>
      <BarChart width={550} height={400} data={dataSample}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Pedidos Concluídos" fill="#9ADE7B" />
        <Bar dataKey="Pedidos Cancelados" fill="#FF8F8F" />
      </BarChart>
    </>
  );
}
