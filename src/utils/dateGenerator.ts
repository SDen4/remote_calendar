import { dateFormatter } from './dateFormatter';

const dateGenerator: any = () => {
  const currentDate = new Date();
  const datesRange: any[] = [];
  const datesLength = 365; // days in initial range

  for (let i = 0; i < datesLength; i++) {
    datesRange.push({
      date: dateFormatter(new Date(currentDate.getTime() + 86400000 * i)),
      day: new Date(currentDate.getTime() + 86400000 * i).getDay(),
    });
  }

  return datesRange;
};

export default dateGenerator;
