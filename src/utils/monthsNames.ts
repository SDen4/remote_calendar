const monthsNames = (month: string | number) => {
  const namesArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const index = Number(month) - 1;
  return namesArray[index];
};

export default monthsNames;
