const cashierData = [
  {
    name: 'papa',
    password: 'papa123',
  },
  {
    name: 'dodo',
    password: 'dodo321',
  },
  {
    name: 'ayu',
    password: 'ayu856',
  },
  {
    name: 'nisa',
    password: 'nisa2007',
  },
];

export const checkPassword = (author: string, passwordCashier: string) => {
  const userIdx = cashierData.findIndex((v) => v.name == author);
  if (cashierData[userIdx].password === passwordCashier) {
    return true;
  }
  return false;
};
