/**
 *  This project serves to receive a binary number and convert it to decimal.
 * 
 * @author Gustavo Wuelta
 */


/**
 * Function responsible for receiving the binary number and transforming it into an array of strings
 * 
 * @param - binary number in string format
 * --------------------------------
 * @return - array of strings with the characters of the parameter passed
 * --------------------------------
 */
function convertBinaryToStringArray(binary: string): string[] {
  const strings: string[] = binary.replace(".", ",").split("");
  return strings;
}

/**
 * Function 
function responsible for traversing the array of strings created and validating whether there are any non-existent items in a binary
 * 
 * @param - array of strings
 * --------------------------------
 * @return - Boolean: "True" if number is binary and "False" if is not
 * --------------------------------
 */
function checkIsBinary(strings: string[]): boolean | undefined {
  let isBinary = false;
  try {
    const temp = strings.map((string) => {
      return string === "1" || string === "0" || string === ",";
    });
    temp.includes(false) ? isBinary : (isBinary = true);
    if (!isBinary) {
      throw new Error("Number is not binary");
    }
    return isBinary;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Function that analyzes whether the binary contains a comma and returns an index that will be used in the potentiation calculation
 * 
 * @param - array of strings
 * --------------------------------
 * @return - Number: 0 if there is no comma, if there is, returns the quantity of numbers after the comma
 * --------------------------------
 */
function catchIndexes(strings: string[]): number {
  if (!strings.includes(",")) return 0;
  const commaPosition: number = strings.indexOf(",");
  const numsAfterComma: string[] = strings.slice(commaPosition + 1);
  let idxs: number = numsAfterComma.length;
  return -idxs;
}

/**
 * Function that turns an array of strings into an array of numbers
 * 
 * @param - array of strings
 * --------------------------------
 * @return - array of numbers
 * --------------------------------
 */
function convertStringsToNumbers(strings: string[]): number[] {
  // Usar Reduce
  const numbers: number[] = [];
  for (const string of strings) {
    // Usar includes
    if (string === "0" || string === "1") {
      numbers.push(Number(string));
    }
  }
  return numbers;
}

/**
 * Function that performs the calculation and returns the binary already in decimal format
 * 
 * @param - array of numbers
 * --------------------------------
 * @return - Number: Binary in decimal format
 * --------------------------------
 */
function calculate(numbers: number[], idx: number): number {
  return numbers.reduceRight((result, currentNumber) => {
    result += currentNumber * 2 ** idx;
    idx++;
    return result;
  }, 0);
}

/**
 * Function responsible for calling all others and running the project
 * 
 * @param - Binary number in string format
 * --------------------------------
 * @return - void
 * --------------------------------
 */
function run(binary: string): void {
  const strings: string[] = convertBinaryToStringArray(binary);
  const isBinary = checkIsBinary(strings);
  if (isBinary) {
    const idx: number = catchIndexes(strings);
    const numbers: number[] = convertStringsToNumbers(strings);
    const decimal: number = calculate(numbers, idx);
    console.log({ binary, decimal });
  }
}

run("10010");
