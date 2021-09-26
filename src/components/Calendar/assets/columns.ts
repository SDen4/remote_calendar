import dateGenerator from '../../../utils/dateGenerator';
import monthsNames from '../../../utils/monthsNames';

const datesRange = dateGenerator();

let monthDays: any = [];
const columns: any = [];

for (let i = 0; i < datesRange.length; i++) {
  let currDayMonth = datesRange[i].slice(3, 5);
  let nextDayMonth =
    datesRange.length - 1 !== i && datesRange[i + 1].slice(3, 5);
  let year = datesRange[i].slice(6, 8);

  if (currDayMonth === nextDayMonth) {
    monthDays.push({
      Header: datesRange[i].slice(0, 2),
      accessor: datesRange[i],
    });
  } else {
    monthDays.push({
      Header: datesRange[i].slice(0, 2),
      accessor: datesRange[i],
    });

    columns.push({
      Header: `${monthsNames(currDayMonth)} ${year}`,
      accessor: currDayMonth,
      columns: [...monthDays],
    });
    monthDays.length = 0;
  }
}

export default columns;
