const monthsNames = (month: string | number) => {
  const namesArray = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'окрябрь',
    'ноябрь',
    'декабрь',
  ];

  const index = Number(month) - 1;
  return namesArray[index];
};

export default monthsNames;
