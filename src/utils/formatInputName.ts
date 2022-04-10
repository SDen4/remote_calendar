const formatInputName = (name: string | number): string => {
  if (!name) {
    return '';
  }

  const wordsArr: string[] = String(name).split(' ');

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i][0] !== undefined) {
      wordsArr[i] = `${wordsArr[i][0].toLocaleUpperCase()}${wordsArr[i].slice(
        1,
      )}`;
    }
  }

  return wordsArr.join(' ');
};

export default formatInputName;
