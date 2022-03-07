import { ethers } from "ethers";

// format balance with comma and 8 decimal place
const formatBalance = (apiBalance: string): string => {
  let apiBalanceFloat: number = Number.parseFloat(apiBalance) / 100000000;
  return apiBalanceFloat.toLocaleString(undefined, {
    minimumFractionDigits: 8,
  });
};

// set up bsc provider
const bscProvider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/", {
    name: "bsc-mainnet",
    chainId: 56,
  });

// erc20 abi
const abi = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",

  // Authenticated Functions
  "function transfer(address to, uint amount) returns (bool)",

  // Events
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

let contract_address: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

let addresses: string[] = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

type balanceParams = {
  address: string;
  provider: ethers.providers.JsonRpcProvider;
};

const getBalance = async (options: balanceParams): Promise<any> => {
  const contract = new ethers.Contract(contract_address, abi, options.provider);
  const balance = await contract.balanceOf(options.address);
  return balance.toString();
};

const getAddressBalances = () => {
  addresses.map((addy) => {
    const options: balanceParams = {
      address: addy,
      provider: bscProvider,
    };
    getBalance(options).then((balance) =>
      console.log(`${addy} ${formatBalance(balance)}`)
    );
  });
};

getAddressBalances();
