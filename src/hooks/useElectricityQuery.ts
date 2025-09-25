import { useQuery } from "@tanstack/react-query";

type ElectricityPriceDto = {
  prices: { price: number; startDate: Date; endDate: Date }[];
};

const queryKey = ["Electricity-latest"];

async function getLatestPrices() {
  try {
    const result = await fetch("/api/electricity");
    return await result.json();
  } catch (e) {
    console.error(e);
  }
}

export default function useElectricityQuery() {
  return useQuery<ElectricityPriceDto>({ queryKey, queryFn: getLatestPrices });
}
