const cashierData = [
  {
    name: 'papa',
    password: 'Papa123',
  },
  {
    name: 'dodo',
    password: 'Dodo123',
  },
  {
    name: 'ayu',
    password: 'Ayu123',
  },
  {
    name: 'nisa',
    password: 'Nisa123',
  },
];

export const checkPassword = (author: string, passwordCashier: string) => {
  const userIdx = cashierData.findIndex((v) => v.name == author);
  if (cashierData[userIdx].password === passwordCashier) {
    return true;
  }
  return false;
};
