const dataFromJSON = {
  "displayedName": {
    "displayedName": {
      "value": [
        "Профиль маячковый ПВХ 10 мм L3м"
      ],
      "description": "Полное наименование товара для клиента"
    }
  },
  "stock": {
    "stocks": {
      "34": {
        "2": "35",
        "3": "42",
        "4": "58",
        "5": "57",
        "6": "112",
        "20": "51",
        "22": "78",
        "26": "34",
        "32": "22",
        "35": "358",
        "40": "28",
        "43": "68",
        "45": "58",
        "49": "31",
        "51": "29",
        "56": "42",
        "62": "26",
        "64": "0",
        "65": "57",
        "86": "15",
        "114": "41",
        "117": "46",
        "143": "46",
        "162": "4",
        "171": "0",
        "176": "12"
      }
    }
  }
}

function getProductName(product) {
  return product.displayedName.displayedName.value[0];
}

function getInStockStores(product) {
  const inStockStores = [];

  for (let stores of Object.values(product.stock.stocks)) {
    for (let [store, amount] of Object.entries(stores)) {
      if (amount > 0) inStockStores.push(store);
    }
  }

  return inStockStores;
}

function getMaxAmountAndStore(product, region) {
  const stores = product.stock.stocks[region];

  if (!stores) {
    return null;
  }

  let maxAmount = -1;
  let maxAmountStore = null;

  for (let [store, amount] of Object.entries(stores)) {
    if (amount > maxAmount) {
      maxAmount = amount;
      maxAmountStore = store;
    }
  }

  return { amount: maxAmount, store: maxAmountStore };
}

console.log('getProductName(dataFromJSON): ' + getProductName(dataFromJSON));
console.log('getInStockStores(dataFromJSON): ' + getInStockStores(dataFromJSON));
console.log('getMaxAmountAndStore(dataFromJSON, 34): ' + JSON.stringify(getMaxAmountAndStore(dataFromJSON, 34)));