import { dateFormatter } from './dateFormatter';

const accessorDatesGenerator: any = (date: Date, name: string) => {
  const currentDate = date;
  const datesLength = 90; // days in initial range

  let newObj: any = {};

  newObj.name = name;

  for (let i = 0; i < datesLength; i++) {
    const date = dateFormatter(new Date(currentDate.getTime() + 86400000 * i));
    const newDate = `a_${date.slice(0, 2)}${date.slice(3, 5)}${date.slice(
      6,
      8,
    )}`;

    newObj[newDate] = 1;
  }
  return newObj;
};

export default accessorDatesGenerator;
