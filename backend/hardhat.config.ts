import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-verify";

const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      chiliz_spicy: "chiliz_spicy", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "chiliz_spicy",
        chainId: 88882,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/88882/etherscan",
          browserURL: "https://testnet.chiliscan.com"
        }
      }
    ]
  },
  networks: {
    chiliz_spicy: {
      url: 'https://spicy-rpc.chiliz.com',
      accounts: [process.env.PRIVATE_KEY ?? 'default_private_key']    },
  },
};

export default config;