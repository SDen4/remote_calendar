import { dateFormatter } from '../../../utils/dateFormatter';

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

const datesRange = dateGenerator();

const columns: any = datesRange.map((el: string) => {
  return {
    Header: el,
    accessor: el,
  };
});

export default columns;
