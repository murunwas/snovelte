import CoinGecko from "coingecko-api";
import { formatData } from "./utils";

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
export const ping = async () => {
  let data = await CoinGeckoClient.coins.all();
  console.log(data);
  return formatData(data.data);
};
