function convertBinaryToStringArray(binary: string): string[] {
  const strings: string[] = binary.replace(".", ",").split("");
  return strings;
}

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

function catchIndexes(strings: string[]): number {
  if (!strings.includes(",")) return 0;
  const commaPosition: number = strings.indexOf(",");
  const numsAfterComma: string[] = strings.slice(commaPosition + 1);
  let idxs: number = numsAfterComma.length;
  return -idxs;
}

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

function calculate(numbers: number[], idx: number): number {
  return numbers.reduceRight((result, currentNumber) => {
    result += currentNumber * 2 ** idx;
    idx++;
    return result;
  }, 0);
}

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
