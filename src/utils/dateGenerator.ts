import { dateFormatter } from './dateFormatter';

const dateGenerator: any = () => {
  const currentDate = new Date();
  const datesRange: any[] = [];
  const datesLength = 100; // days in initial range

  for (let i = 0; i < datesLength; i++) {
    datesRange.push(
      dateFormatter(new Date(currentDate.getTime() + 86400000 * i)),
    );
  }

  return datesRange;
};

export default dateGenerator;
