export default async function handler(req, res) {
  const url = "https://fapi.binance.com/fapi/v1/fundingRate?symbol=BTCUSDT&limit=1";

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "API request failed" });
  }
}
