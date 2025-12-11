export const getDateFormatted = (date: string) => {
  if (date == null) return '-';
  const number = new Date(date);

  return number.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
};

export function formatDate(date: string) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export const getPriceFormmated = (price: number) => {
  let str = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
  }).format(price);
  str = str.replace(/\.00$/, '');
  return str;
};
