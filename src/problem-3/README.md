# salad-problem-3

## Problem

⚠️ Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com/).

Implement a datasource connector to abstract away data retrieval and manipulation from the *View Controllers*. You are required to implement a Datasource utility class. How your implementation will be used:

```jsx
ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.err(error);
  });
```

## Expected Output

```
Mid price for BTCSGD is 8925.7 SGD.
Mid price for LTCUSD is 65.92 USD.
Mid price for ETHSGD is 509.275 SGD.
Mid price for BCHSGD is 852.29 SGD.
Mid price for LTCSGD is 89.94 SGD.
Mid price for BTCUSD is 6529.6 USD.
Mid price for BCHUSD is 625.58 USD.
Mid price for ETHUSD is 373.555 USD.
```

## Solution

Click [here](https://jsfiddle.net/hr21Lztn/) to view the solution online, or view the source code [here](index.js)
