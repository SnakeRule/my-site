"use client";

import useElectricityQuery from "@/hooks/useElectricityQuery";
import dayjs from "dayjs";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ElectricityChart() {
  const { data } = useElectricityQuery();

  function mapData() {
    if (data) {
      return data.prices
        .filter(
          (price) => dayjs(price.startDate).day() === dayjs(Date.now()).day()
        )
        .map((price) => ({
          date: dayjs(price.startDate).format("HH.mm"),
          price: price.price,
        }))
        .reverse();
    }
    return [];
  }

  return (
    <div style={{ height: 600, width: "100%" }}>
      <ResponsiveContainer>
        <BarChart data={mapData()}>
          <XAxis dataKey={"date"} />
          <YAxis dataKey={"price"} />
          <Bar dataKey={"price"} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
