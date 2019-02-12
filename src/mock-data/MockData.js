/* eslint-disable */

export const mockICOs = (amount) => {
  const ICOs = [];
  for (let i = 0; i < amount; i++) {
    let numOfTransactions = randomNumOfTransactions();
    let ranAddress = randomChars(34);
    for (let j = 0; j < numOfTransactions; j++) {
      let ico = randomICO(ranAddress);
      ICOs.push(ico);
    }
  }
  return ICOs;
};

const randomDate = (start, end) => {
  let ranDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return ranDate.toString();
};

const randomChars = (length) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

const randomCurrency = () => {
  const currencies = ['ETH', 'ETH', 'ETH', 'ETH', 'BTC', 'LTC', 'BTC'];
  return currencies[Math.floor(Math.random() * Math.floor(7))];
};

const randomValue = (currency) => {
  let ranValue = 0;
  switch (currency) {
    case 'ETH':
      // const weiInEth = 1000000000000000000;
      const mweiInEth = 1000000000000;
      ranValue = Math.random() * 3.5;
      if (ranValue < 0.05) ranValue = 0.05;
      return Math.floor(ranValue * 104.57);
    case 'BTC':
      const satoshiInBtc = 100000000;
      ranValue = Math.random() * 0.09;
      if (ranValue < 0.0016) ranValue = 0.0016;
      return Math.floor(ranValue * 3198.64);
    case 'LTC':
      const litoshiInLtc = 100000000;
      ranValue = Math.random() * 5;
      if (ranValue < 0.13) ranValue = 0.13;
      return Math.floor(ranValue * 27.29);
    default:
  }
};

const randomNumOfTransactions = () => {
  const numOfTransactions = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ];
  return numOfTransactions[Math.floor(Math.random() * Math.floor(19))];
};

const randomICO = (address) => {
  const ranCurrency = randomCurrency();
  const ico = {
    address: address,
    currency: ranCurrency,
    value: randomValue(ranCurrency),
    txid: randomChars(64),
    date: randomDate(new Date(2018, 2, 2), new Date()),
  };
  return ico;
};
