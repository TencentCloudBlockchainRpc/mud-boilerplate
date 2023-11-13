/*
 * Config chain based on tencent rpc URL.
 *
 */

import { defineChain } from "viem";
export const tprcChain = defineChain({
  id: 80001,
  name: "Polygon Mumbai",
  network: "maticmum",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: {
      http: ["https://www.tencentcloud-rpc.com/v1/polygon_mumbai/{YOUR_RPC_API_KEY}"],
      webSocket: ["wss://rpc.ankr.com/polygon_mumbai/ws/{YOUR_RPC_API_KEY}"],
    },
    public: {
      http: ["https://www.tencentcloud-rpc.com/v1/polygon_mumbai/{YOUR_RPC_API_KEY}"],
      webSocket: ["wss://rpc.ankr.com/polygon_mumbai/ws/{YOUR_RPC_API_KEY}"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://mumbai.polygonscan.com" },
  },
});
