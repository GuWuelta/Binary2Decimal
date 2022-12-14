function convertBinaryToStringArray(binary: string): string[] {
  const stringArray = binary.replace(".", ",").split("");
  return stringArray;
}

function catchIdxs(stringArray: string[]): number {
  if (!stringArray.includes(",")) return 0;
  const commaPosition = stringArray.indexOf(",");
  const numsAfterComma = stringArray.slice(commaPosition + 1);
  let idxs = numsAfterComma.length;
  return -idxs;
}

function convertStringArrayToNumberArray(stringArray: string[]): number[] {
  const numberArray = [];
  for (const string of stringArray) {
    if (string === "0" || string === "1") {
      numberArray.push(parseInt(string));
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

function run() {
  const stringArray = convertBinaryToStringArray("10010");
  const idx = catchIdxs(stringArray);
  const numberArray = convertStringArrayToNumberArray(stringArray);
  //const decimal = calculate(numberArray, idx);
}
