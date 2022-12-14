function convertBinaryToStringArray(binary: string): string[] {
  const strings: string[] = binary.replace(".", ",").split("");
  return strings;
}

function checkIsBinary(strings: string[]) {
  let isBinary = false;
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
  const idx: number = catchIndexes(strings);
  const numbers: number[] = convertStringsToNumbers(strings);
  const decimal: number = calculate(numbers, idx);
  console.log({ decimal });
}

run("10010");
