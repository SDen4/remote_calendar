export const dateFormatter = (dataCreated: Date): string => {
  const day =
    dataCreated.getDate() < 10
      ? `0${dataCreated.getDate()}`
      : dataCreated.getDate();

  const month =
    dataCreated.getMonth() < 9
      ? `0${dataCreated.getMonth() + 1}`
      : dataCreated.getMonth() + 1;

  const year = String(dataCreated.getFullYear()).slice(2, 4);

  return `${day}.${month}.${year}`;
};
