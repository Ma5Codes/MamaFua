export const services = [
  {
    name: 'cuci-lipat',
    value: 'Cuci Lipat',
    price: 6000,
  },
  {
    name: 'cuci-lipat-bayi',
    value: 'Cuci Lipat Bj Bayi',
    price: 9000,
  },
  {
    name: 'cuci-lipat-anak',
    value: 'Cuci Lipat Bj Anak',
    price: 7000,
  },
  {
    name: 'cuci-komplit',
    value: 'Cuci Komplit',
    price: 9000,
  },
  {
    name: 'cuci-komplit-bayi',
    value: 'Cuci Komplit Bj Bayi',
    price: 11000,
  },
  {
    name: 'lipat-saja',
    value: 'Lipat Saja',
    price: 3000,
  },
  {
    name: 'kering-saja',
    value: 'Kering Saja',
    price: 10000,
  },
  {
    name: 'setrika',
    value: 'Setrika',
    price: 5000,
  },
  {
    name: 'kering-saja-6kg',
    value: 'Kering Saja 6kg',
    price: 10000,
  },
  {
    name: 'kering-saja-10kg',
    value: 'Kering Saja 10kg',
    price: 15000,
  },
  {
    name: 'sprei-no-3-4',
    value: 'Sprei No 3 & 4',
    price: 12000,
  },
  {
    name: 'sprei-no-2',
    value: 'Sprei No. 2',
    price: 16000,
  },
  {
    name: 'sprei-no-1',
    value: 'Sprei No. 1',
    price: 20000,
  },
  {
    name: 'karpet-type-1',
    value: 'Karpet Type 1',
    price: 22000,
  },
  {
    name: 'karpet-type-2',
    value: 'Karpet Type 2',
    price: 17500,
  },
  {
    name: 'cuci-lipat-express',
    value: 'Cuci Lipat Express',
    price: 9000,
  },
  {
    name: 'cuci-lipat-bayi-express',
    value: 'Cuci Lipat Bj Bayi Express',
    price: 14000,
  },
  {
    name: 'cuci-lipat-anak-express',
    value: 'Cuci Lipat Bj Anak Express',
    price: 12000,
  },
  {
    name: 'cuci-komplit-express',
    value: 'Cuci Komplit Express',
    price: 14000,
  },
  {
    name: 'cuci-komplit-bayi-express',
    value: 'Cuci Komplit Bj Bayi Express',
    price: 17000,
  },
  {
    name: 'lipat-saja-express',
    value: 'Lipat Saja Express',
    price: 5000,
  },
  {
    name: 'sprei-no-3-4-express',
    value: 'Sprei No 3 & 4 Express',
    price: 18000,
  },
  {
    name: 'sprei-no-2-express',
    value: 'Sprei No. 2 Express',
    price: 24000,
  },
  {
    name: 'sprei-no-1-express',
    value: 'Sprei No. 1 Express',
    price: 30000,
  },
  {
    name: 'lainnya',
    value: 'Lainnya',
    price: 0,
  },
];

export const getServicePerPrice = (
  selectedService: string,
  weight: number,
  defaultPerPrice?: number,
) => {
  if (defaultPerPrice) {
    return defaultPerPrice;
  } else {
    if (weight === 0) {
      return getServiceBasicPrice(selectedService);
    }

    if (
      selectedService === 'kering-saja' ||
      selectedService === 'kering-saja-6kg' ||
      selectedService === 'kering-saja-10kg'
    ) {
      if (weight <= 6) return 10000;
      if (weight <= 10) return 15000;
      return Math.ceil(weight / 10) * 15000;
    }

    if (selectedService === 'cuci-lipat') {
      if (weight < 3) return Math.floor((6000 * 3) / weight);
      return 6000;
    }
    if (selectedService === 'setrika') {
      if (weight < 3) return Math.floor((5000 * 3) / weight);
      return 5000;
    }
    if (selectedService === 'cuci-lipat-bayi') {
      if (weight < 3) return Math.floor((9000 * 3) / weight);
      return 9000;
    }
    if (selectedService === 'cuci-lipat-anak') {
      if (weight < 3) return Math.floor((7000 * 3) / weight);
      return 7000;
    }
    if (selectedService === 'cuci-komplit') {
      if (weight < 3) return Math.floor((9000 * 3) / weight);
      return 9000;
    }
    if (selectedService === 'cuci-komplit-bayi') {
      if (weight < 3) return Math.floor((11000 * 3) / weight);
      return 11000;
    }
    if (selectedService === 'lipat-saja') {
      if (weight < 3) return Math.floor((3000 * 3) / weight);
      return 3000;
    }
    if (selectedService === 'cuci-lipat-express') {
      if (weight < 3) return Math.floor(27000 / weight);
      return Math.floor((27000 + (weight - 3) * 9000) / weight);
    }
    if (selectedService === 'cuci-komplit-express') {
      if (weight < 3) return Math.floor(42000 / weight);
      return Math.floor((42000 + (weight - 3) * 14000) / weight);
    }
    return getServiceBasicPrice(selectedService);
  }
};

export const getServiceTotalPrice = (
  selectedService: string,
  weight: number,
  customPerPrice?: number,
  defaultTotalPrice?: number,
) => {
  if (defaultTotalPrice) {
    return defaultTotalPrice;
  } else {
    if (
      selectedService === 'kering-saja' ||
      selectedService === 'kering-saja-6kg' ||
      selectedService === 'kering-saja-10kg'
    ) {
      if (weight <= 6) return 10000;
      if (weight <= 10) return 15000;
      return Math.ceil(weight / 10) * 15000;
    }

    if (selectedService === 'lainnya') {
      const perprice = customPerPrice ? customPerPrice : 0;
      return weight * perprice;
    }
    if (selectedService === 'setrika') {
      if (weight < 3) return 3 * 5000;
      return weight * 5000;
    }
    if (selectedService === 'cuci-lipat') {
      if (weight < 3) return 3 * 6000;
      return weight * 6000;
    }
    if (selectedService === 'cuci-lipat-bayi') {
      if (weight < 3) return 3 * 9000;
      return weight * 9000;
    }
    if (selectedService === 'cuci-lipat-anak') {
      if (weight < 3) return 3 * 7000;
      return weight * 7000;
    }
    if (selectedService === 'cuci-komplit') {
      if (weight < 3) return 3 * 9000;
      return weight * 9000;
    }
    if (selectedService === 'cuci-komplit-bayi') {
      if (weight < 3) return 3 * 11000;
      return weight * 11000;
    }
    if (selectedService === 'lipat-saja') {
      if (weight < 3) return 3 * 3000;
      return weight * 3000;
    }
    if (selectedService === 'cuci-lipat-express') {
      if (weight < 3) return 27000;
      return Math.floor(27000 + (weight - 3) * 9000);
    }
    if (selectedService === 'cuci-komplit-express') {
      if (weight < 3) return 42000;
      return Math.floor(42000 + (weight - 3) * 14000);
    }
    return Math.floor(weight * getServicePerPrice(selectedService, weight));
  }
};

export const getServiceBasicPrice = (selectedService: string) => {
  if (selectedService === 'cuci-lipat') return 6000;
  if (selectedService === 'cuci-lipat-bayi') return 9000;
  if (selectedService === 'cuci-lipat-anak') return 7000;
  if (selectedService === 'cuci-komplit') return 9000;
  if (selectedService === 'cuci-komplit-bayi') return 11000;
  if (selectedService === 'lipat-saja') return 3000;
  if (selectedService === 'setrika') return 5000;
  if (selectedService === 'kering-saja') return 10000;
  if (selectedService === 'kering-saja-6kg') return 10000;
  if (selectedService === 'kering-saja-10kg') return 15000;
  if (selectedService === 'sprei-no-3-4') return 12000;
  if (selectedService === 'sprei-no-2') return 16000;
  if (selectedService === 'sprei-no-1') return 20000;
  if (selectedService === 'karpet-type-1') return 22000;
  if (selectedService === 'karpet-type-2') return 17500;
  if (selectedService === 'cuci-lipat-express') return 9000;
  if (selectedService === 'cuci-lipat-bayi-express') return 14000;
  if (selectedService === 'cuci-lipat-anak-express') return 12000;
  if (selectedService === 'cuci-komplit-express') return 14000;
  if (selectedService === 'cuci-komplit-bayi-express') return 17000;
  if (selectedService === 'lipat-saja-express') return 5000;
  if (selectedService === 'sprei-no-3-4-express') return 18000;
  if (selectedService === 'sprei-no-2-express') return 24000;
  if (selectedService === 'sprei-no-1-express') return 30000;
  if (selectedService === 'lainnya') return 0;
  return 0;
};

export const getLabelService = (selectedService: string) => {
  if (selectedService === 'cuci-lipat') return 'Cuci Lipat';
  if (selectedService === 'cuci-lipat-bayi') return 'Cuci Lipat Bj Bayi';
  if (selectedService === 'cuci-lipat-anak') return 'Cuci Lipat Bj Anak';
  if (selectedService === 'cuci-komplit') return 'Cuci Komplit';
  if (selectedService === 'cuci-komplit-bayi') return 'Cuci Komplit Bj Bayi';
  if (selectedService === 'lipat-saja') return 'Lipat Saja';
  if (selectedService === 'setrika') return 'Setrika';
  if (selectedService === 'kering-saja') return 'Kering Saja';
  if (selectedService === 'kering-saja-6kg') return 'Kering Saja 6kg';
  if (selectedService === 'kering-saja-10kg') return 'Kering Saja 10kg';
  if (selectedService === 'sprei-no-3-4') return 'Sprei No 3 & 4';
  if (selectedService === 'sprei-no-2') return 'Sprei No. 2';
  if (selectedService === 'sprei-no-1') return 'Sprei No. 1';
  if (selectedService === 'karpet-type-1') return 'Karpet Type 1';
  if (selectedService === 'karpet-type-2') return 'Karpet Type 2';
  if (selectedService === 'cuci-lipat-express') return 'Cuci Lipat Express';
  if (selectedService === 'cuci-lipat-bayi-express')
    return 'Cuci Lipat Bj Bayi Express';
  if (selectedService === 'cuci-lipat-anak-express')
    return 'Cuci Lipat Bj Anak Express';
  if (selectedService === 'cuci-komplit-express') return 'Cuci Komplit Express';
  if (selectedService === 'cuci-komplit-bayi-express')
    return 'Cuci Komplit Bj Bayi Express';
  if (selectedService === 'lipat-saja-express') return 'Lipat Saja Express';
  if (selectedService === 'sprei-no-3-4-express')
    return 'Sprei No 3 & 4 Express';
  if (selectedService === 'sprei-no-2-express') return 'Sprei No. 2 Express';
  if (selectedService === 'sprei-no-1-express') return 'Sprei No. 1 Express';
  if (selectedService === 'lainnya') return 'Lainnya';
  return '';
};

export const isServiceExpress = (selectedService: string) => {
  return selectedService !== '' && selectedService?.includes('express');
};
