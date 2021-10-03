import { dateFormatter } from './dateFormatter';

const accessorDatesGenerator: any = (date: Date, name: string) => {
  const currentDate = date;
  // const datesRange: any[] = [];
  const datesLength = 365; // days in initial range

  let newObj: any = {};

  newObj.name = name;

  for (let i = 0; i < datesLength; i++) {
    const date = dateFormatter(new Date(currentDate.getTime() + 86400000 * i));
    const newDate = `accessor_${date.slice(0, 2)}${date.slice(
      3,
      5,
    )}${date.slice(6, 8)}`;

    newObj[newDate] = 1;
    // datesRange.push(newObj);
  }
  return newObj;
};

export default accessorDatesGenerator;
