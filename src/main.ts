function convertBinaryToStringArray(binary: string): string[] {
  const stringArray: string[] = binary.replace(".", ",").split("");
  return stringArray;
}

function checkIsBinary(stringArray: string[]) {
  stringArray.map;
}

function catchIdxs(stringArray: string[]): number {
  if (!stringArray.includes(",")) return 0;
  const commaPosition: number = stringArray.indexOf(",");
  const numsAfterComma: string[] = stringArray.slice(commaPosition + 1);
  let idxs: number = numsAfterComma.length;
  return -idxs;
}

function convertStringArrayToNumberArray(stringArray: string[]): number[] {
  const numberArray: number[] = [];
  for (const string of stringArray) {
    if (string === "0" || string === "1") {
      numberArray.push(Number(string));
    }
  }
  return numberArray;
}

function calculate(numberArray: number[], idx: number): number {
  return numberArray.reduceRight((acc, cur) => {
    acc += cur * 2 ** idx;
    idx++;
    return acc;
  }, 0);
}

function run(binary: string): void {
  const stringArray: string[] = convertBinaryToStringArray(binary);
  const idx: number = catchIdxs(stringArray);
  const numberArray: number[] = convertStringArrayToNumberArray(stringArray);
  const decimal: number = calculate(numberArray, idx);
  console.log(decimal);
}

run("10010");
