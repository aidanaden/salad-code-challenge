# salad-problem-4

## Problem

⚠️ **TypeScript Only** - you are to complete this problem using TypeScript.

Implement a script to retrieve the specified holders of [$SWTH token](https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c) on the [Binance Smart Chain](https://coinmarketcap.com/alexandria/article/what-is-binance-smart-chain) network.

BSC Block Explorer: [https://bscscan.com/](https://bscscan.com/)

$SWTH Token Contract: `0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c`

Addresses to look up:

```json
0x123d475e13aa54a43a7421d94caa4459da021c77
0x0020c5222a24e4a96b720c06b803fb8d34adc0af
0xfe808b079187cc460f47374580f5fb47c82b87a5
```

How your script will be tested:

```bash
ts-node ./retrieve-holders.ts
```

## Expected Output:

The output should be organized as one `address amount` per line.

```
0x123d475e13aa54a43a7421d94caa4459da021c77 99,888,874.62734227
0x0020c5222a24e4a96b720c06b803fb8d34adc0af 7,970,573.69197209
0xfe808b079187cc460f47374580f5fb47c82b87a5 2,894,918.96152958
…
```

💡 **Hint**: You may need to use the NPM module [ethers.js](https://docs.ethers.io/v5/) to complete this task.

## Solution

I was able to come up with 2 methods of solving this problem.

### Solution 1:

Query the bscscan api endpoint directly.

**pros**:

1. Easier since it doesn't require direct connection with the bsc blockchain (no need knowledge of ether.js)

**cons**:

1. heavy reliance on bscscan api (centralised)
2. data may not be accurate since it isn't obtained directly from the bsc blockchain

### Solution 2:

Query the bsc blockchain directly using ether.js

**pros**:

1. Less reliant on any single provider (less-centralised)
2. Data more likely to be accurate since obtained directly from the bsc blockchain

**cons**:

1. More difficult to set up since knowledge of ether.js is required
