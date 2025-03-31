function add(numbers: string): number {
  if (!numbers.length) {
    return 0;
  }
  if (numbers.length === 1) {
    return parseInt(numbers);
  }

  return 0;
}

export default add;
