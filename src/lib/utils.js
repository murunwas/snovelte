export function formatData(data = []) {
  return data.map((d) => {
    const { id, symbol, name, image, market_data } = d;
    const {
      current_price: { usd, zar }
    } = market_data;
    return {
      id,
      symbol,
      name,
      image,
      usd,
      zar
    };
  });
}
