import CoinGecko from "coingecko-api";
import { formatData } from "./utils";

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
export const ping = async () => {
  let params = {
    ids: ["bitcoin", "xrp"]
  };
  let data = await CoinGeckoClient.coins.all({ params });
  //console.log(data);
  return formatData(data.data);
};

export const getById = async (id) => {
  let data = await CoinGeckoClient.coins.fetch(id, {});
  console.log(data);
  return data;
  //return formatData(data.data);
};
//
