import fetch from "node-fetch";

// format balance with comma and 8 decimal place
const formatBalance = (apiBalance: string): string => {
  let apiBalanceFloat: number = Number.parseFloat(apiBalance) / 100000000;
  return apiBalanceFloat.toLocaleString(undefined, {
    minimumFractionDigits: 8,
  });
};

// set api key, contract address and addresses to check balances
let apiKey: string = "T2687Z9UWH9F7AV6GN7HYYRS3QBPHFM2AX";
let contract_address: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

// list of account addresses to check
let addresses: string[] = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

// get bscscan api url with contract addy,
// account addy and api key
const getEndpoint = (
  contractAddress: string,
  accountAddress: string,
  apiKey: string
): string => {
  return `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${accountAddress}&tag=latest&apikey=${apiKey}`;
};

// retrieve balance of each address
const retrieveHolders = (): void => {
  addresses.map((addy: string) => {
    fetch(getEndpoint(contract_address, addy, apiKey))
      .then((data: any) => data.json())
      .then((result: any) => {
        const balance: string = formatBalance(result.result);
        const addyData = `${addy} ${balance}`;
        console.log(addyData);
      });
  });
};

retrieveHolders();
