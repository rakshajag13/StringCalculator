function add(numbers: string): number {
  if (!numbers.length) {
    return 0;
  }

  let delimiter = /[\n,]/;
  let numString = numbers;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
    numString = numbers.substring(delimiterEndIndex + 1);
  }

  //check for negative numbers
  const negativeNumbers = numString.match(/-\d+/g);
  if (negativeNumbers) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
  }
  const numArray = numString.split(delimiter).map((num) => parseInt(num));
  if (numArray.some((num) => isNaN(num))) {
    return 0;
  }

  return numArray.reduce((acc, curr) => acc + curr, 0);
}

export default add;
