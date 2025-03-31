function add(numbers: string): number {
  if (!numbers.length) {
    return 0;
  }
  if (numbers.length === 1) {
    return parseInt(numbers);
  }
  if (numbers.length > 1) {
    const numArray = numbers.split(/[\n,]/).map((num) => parseInt(num));
    if (numArray.some((num) => isNaN(num))) {
      return 0;
    }
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }

  return 0;
}

export default add;
