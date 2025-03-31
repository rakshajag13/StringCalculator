function add(numbers: string): number {
  if (!numbers.length) {
    return 0;
  }
  if (numbers.length === 1) {
    return parseInt(numbers);
  }
  if (numbers.length > 1) {
    const numArray = numbers.split(",").map((num) => parseInt(num));
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }

  return 0;
}

export default add;
