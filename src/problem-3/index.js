class Price {
  constructor(price) {
    this.price = price;
    this.pair = price.pair;
  }

  // returns middle price of buy n sell prices in DOLLARS
  mid() {
    const buy = parseFloat(this.price.buy);
    const sell = parseFloat(this.price.sell);
    return (buy + sell) / 2 / 100;
  }

  // returns trading pair counter currency (last 3 letters)
  quote() {
    return this.pair.slice(3, 6);
  }
}

class Datasource {
  constructor(source) {
    this.source = source;
  }

  // returns json version of fetched data
  jsonifySourceData(data) {
    return data.json();
  }

  // wraps price json objects with Price class
  wrapToPriceObject(priceJsons) {
    const priceObjects = [];
    priceJsons.data.prices.map((price) => {
      const priceObj = new Price(price);
      priceObjects.push(priceObj);
    });
    return priceObjects;
  }

  // returns promise of fetch -> json -> wrap with Price class
  getPrices() {
    return new Promise((resolve, reject) => {
      resolve(
        fetch(this.source)
          .then((data) => {
            return this.jsonifySourceData(data);
          })
          .then((priceJsons) => {
            return his.wrapToPriceObject(priceJsons);
          })
      );
    });
  }
}

function getPricesTest() {
  ds = new Datasource("https://static.ngnrs.io/test/prices");

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
}

getPricesTest();
