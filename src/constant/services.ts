export const services = [
  {
    name: 'wash-fold',
    value: 'Wash & Fold',
    price: 6000,
  },
  {
    name: 'wash-fold-baby',
    value: 'Wash & Fold Baby Clothes',
    price: 9000,
  },
  {
    name: 'wash-fold-kids',
    value: 'Wash & Fold Kids Clothes',
    price: 7000,
  },
  {
    name: 'full-wash',
    value: 'Full Wash Service',
    price: 9000,
  },
  {
    name: 'full-wash-baby',
    value: 'Full Wash Baby Clothes',
    price: 11000,
  },
  {
    name: 'fold-only',
    value: 'Fold Only',
    price: 3000,
  },
  {
    name: 'dry-only',
    value: 'Dry Only',
    price: 10000,
  },
  {
    name: 'ironing',
    value: 'Ironing',
    price: 5000,
  },
  {
    name: 'dry-only-6kg',
    value: 'Dry Only 6kg',
    price: 10000,
  },
  {
    name: 'dry-only-10kg',
    value: 'Dry Only 10kg',
    price: 15000,
  },
  {
    name: 'bedsheet-no-3-4',
    value: 'Bedsheet No. 3 & 4',
    price: 12000,
  },
  {
    name: 'bedsheet-no-2',
    value: 'Bedsheet No. 2',
    price: 16000,
  },
  {
    name: 'bedsheet-no-1',
    value: 'Bedsheet No. 1',
    price: 20000,
  },
  {
    name: 'carpet-type-1',
    value: 'Carpet Type 1',
    price: 22000,
  },
  {
    name: 'carpet-type-2',
    value: 'Carpet Type 2',
    price: 17500,
  },
  {
    name: 'wash-fold-express',
    value: 'Wash & Fold Express',
    price: 9000,
  },
  {
    name: 'wash-fold-baby-express',
    value: 'Wash & Fold Baby Clothes Express',
    price: 14000,
  },
  {
    name: 'wash-fold-kids-express',
    value: 'Wash & Fold Kids Clothes Express',
    price: 12000,
  },
  {
    name: 'full-wash-express',
    value: 'Full Wash Service Express',
    price: 14000,
  },
  {
    name: 'full-wash-baby-express',
    value: 'Full Wash Baby Clothes Express',
    price: 17000,
  },
  {
    name: 'fold-only-express',
    value: 'Fold Only Express',
    price: 5000,
  },
  {
    name: 'bedsheet-no-3-4-express',
    value: 'Bedsheet No. 3 & 4 Express',
    price: 18000,
  },
  {
    name: 'bedsheet-no-2-express',
    value: 'Bedsheet No. 2 Express',
    price: 24000,
  },
  {
    name: 'bedsheet-no-1-express',
    value: 'Bedsheet No. 1 Express',
    price: 30000,
  },
  {
    name: 'others',
    value: 'Others',
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
      selectedService === 'dry-only' ||
      selectedService === 'dry-only-6kg' ||
      selectedService === 'dry-only-10kg'
    ) {
      if (weight <= 6) return 10000;
      if (weight <= 10) return 15000;
      return Math.ceil(weight / 10) * 15000;
    }

    if (selectedService === 'wash-fold') {
      if (weight < 3) return Math.floor((6000 * 3) / weight);
      return 6000;
    }
    if (selectedService === 'ironing') {
      if (weight < 3) return Math.floor((5000 * 3) / weight);
      return 5000;
    }
    if (selectedService === 'wash-fold-baby') {
      if (weight < 3) return Math.floor((9000 * 3) / weight);
      return 9000;
    }
    if (selectedService === 'wash-fold-kids') {
      if (weight < 3) return Math.floor((7000 * 3) / weight);
      return 7000;
    }
    if (selectedService === 'full-wash') {
      if (weight < 3) return Math.floor((9000 * 3) / weight);
      return 9000;
    }
    if (selectedService === 'full-wash-baby') {
      if (weight < 3) return Math.floor((11000 * 3) / weight);
      return 11000;
    }
    if (selectedService === 'fold-only') {
      if (weight < 3) return Math.floor((3000 * 3) / weight);
      return 3000;
    }
    if (selectedService === 'wash-fold-express') {
      if (weight < 3) return Math.floor(27000 / weight);
      return Math.floor((27000 + (weight - 3) * 9000) / weight);
    }
    if (selectedService === 'full-wash-express') {
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
      selectedService === 'dry-only' ||
      selectedService === 'dry-only-6kg' ||
      selectedService === 'dry-only-10kg'
    ) {
      if (weight <= 6) return 10000;
      if (weight <= 10) return 15000;
      return Math.ceil(weight / 10) * 15000;
    }

    if (selectedService === 'others') {
      const perprice = customPerPrice ? customPerPrice : 0;
      return weight * perprice;
    }
    if (selectedService === 'ironing') {
      if (weight < 3) return 3 * 5000;
      return weight * 5000;
    }
    if (selectedService === 'wash-fold') {
      if (weight < 3) return 3 * 6000;
      return weight * 6000;
    }
    if (selectedService === 'wash-fold-baby') {
      if (weight < 3) return 3 * 9000;
      return weight * 9000;
    }
    if (selectedService === 'wash-fold-kids') {
      if (weight < 3) return 3 * 7000;
      return weight * 7000;
    }
    if (selectedService === 'full-wash') {
      if (weight < 3) return 3 * 9000;
      return weight * 9000;
    }
    if (selectedService === 'full-wash-baby') {
      if (weight < 3) return 3 * 11000;
      return weight * 11000;
    }
    if (selectedService === 'fold-only') {
      if (weight < 3) return 3 * 3000;
      return weight * 3000;
    }
    if (selectedService === 'wash-fold-express') {
      if (weight < 3) return 27000;
      return Math.floor(27000 + (weight - 3) * 9000);
    }
    if (selectedService === 'full-wash-express') {
      if (weight < 3) return 42000;
      return Math.floor(42000 + (weight - 3) * 14000);
    }
    return Math.floor(weight * getServicePerPrice(selectedService, weight));
  }
};

export const getServiceBasicPrice = (selectedService: string) => {
  if (selectedService === 'wash-fold') return 6000;
  if (selectedService === 'wash-fold-baby') return 9000;
  if (selectedService === 'wash-fold-kids') return 7000;
  if (selectedService === 'full-wash') return 9000;
  if (selectedService === 'full-wash-baby') return 11000;
  if (selectedService === 'fold-only') return 3000;
  if (selectedService === 'ironing') return 5000;
  if (selectedService === 'dry-only') return 10000;
  if (selectedService === 'dry-only-6kg') return 10000;
  if (selectedService === 'dry-only-10kg') return 15000;
  if (selectedService === 'bedsheet-no-3-4') return 12000;
  if (selectedService === 'bedsheet-no-2') return 16000;
  if (selectedService === 'bedsheet-no-1') return 20000;
  if (selectedService === 'carpet-type-1') return 22000;
  if (selectedService === 'carpet-type-2') return 17500;
  if (selectedService === 'wash-fold-express') return 9000;
  if (selectedService === 'wash-fold-baby-express') return 14000;
  if (selectedService === 'wash-fold-kids-express') return 12000;
  if (selectedService === 'full-wash-express') return 14000;
  if (selectedService === 'full-wash-baby-express') return 17000;
  if (selectedService === 'fold-only-express') return 5000;
  if (selectedService === 'bedsheet-no-3-4-express') return 18000;
  if (selectedService === 'bedsheet-no-2-express') return 24000;
  if (selectedService === 'bedsheet-no-1-express') return 30000;
  if (selectedService === 'others') return 0;
  return 0;
};

export const getLabelService = (selectedService: string) => {
  if (selectedService === 'wash-fold') return 'Wash & Fold';
  if (selectedService === 'wash-fold-baby') return 'Wash & Fold Baby Clothes';
  if (selectedService === 'wash-fold-kids') return 'Wash & Fold Kids Clothes';
  if (selectedService === 'full-wash') return 'Full Wash Service';
  if (selectedService === 'full-wash-baby') return 'Full Wash Baby Clothes';
  if (selectedService === 'fold-only') return 'Fold Only';
  if (selectedService === 'ironing') return 'Ironing';
  if (selectedService === 'dry-only') return 'Dry Only';
  if (selectedService === 'dry-only-6kg') return 'Dry Only 6kg';
  if (selectedService === 'dry-only-10kg') return 'Dry Only 10kg';
  if (selectedService === 'bedsheet-no-3-4') return 'Bedsheet No. 3 & 4';
  if (selectedService === 'bedsheet-no-2') return 'Bedsheet No. 2';
  if (selectedService === 'bedsheet-no-1') return 'Bedsheet No. 1';
  if (selectedService === 'carpet-type-1') return 'Carpet Type 1';
  if (selectedService === 'carpet-type-2') return 'Carpet Type 2';
  if (selectedService === 'wash-fold-express') return 'Wash & Fold Express';
  if (selectedService === 'wash-fold-baby-express')
    return 'Wash & Fold Baby Clothes Express';
  if (selectedService === 'wash-fold-kids-express')
    return 'Wash & Fold Kids Clothes Express';
  if (selectedService === 'full-wash-express')
    return 'Full Wash Service Express';
  if (selectedService === 'full-wash-baby-express')
    return 'Full Wash Baby Clothes Express';
  if (selectedService === 'fold-only-express') return 'Fold Only Express';
  if (selectedService === 'bedsheet-no-3-4-express')
    return 'Bedsheet No. 3 & 4 Express';
  if (selectedService === 'bedsheet-no-2-express')
    return 'Bedsheet No. 2 Express';
  if (selectedService === 'bedsheet-no-1-express')
    return 'Bedsheet No. 1 Express';
  if (selectedService === 'others') return 'Others';
  return '';
};

export const isServiceExpress = (selectedService: string) => {
  return selectedService !== '' && selectedService?.includes('express');
};
