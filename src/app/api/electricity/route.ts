export async function GET() {
  const response = await fetch(
    "https://api.porssisahko.net/v2/latest-prices.json"
  );
  const prices = await response.json();
  return Response.json(prices);
}
