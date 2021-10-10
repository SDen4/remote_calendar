import { dateFormatter } from './dateFormatter';

const dateGenerator: any = (date: Date, datesLength: number) => {
  const currentDate = date;
  const datesRange: any[] = [];

  for (let i = 0; i < datesLength; i++) {
    datesRange.push({
      date: dateFormatter(new Date(currentDate.getTime() + 86400000 * i)),
      day: new Date(currentDate.getTime() + 86400000 * i).getDay(),
    });
  }

  return datesRange;
};

export default dateGenerator;
