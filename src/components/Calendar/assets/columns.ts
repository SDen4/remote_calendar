import { dateFormatter } from '../../../utils/dateFormatter';

const dateGenerator: any = () => {
  const currentDate = new Date();
  console.log(currentDate);
  console.log(dateFormatter(currentDate));
};

dateGenerator();

const columns: any = [
  {
    Header: 'Column 1',
    accessor: 'col1',
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
  {
    Header: 'Column 3',
    accessor: 'col3',
  },
];

export default columns;
