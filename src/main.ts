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

function convertStringArrayToNumberArray(stringArray: string[]) {
  let numberArray = stringArray.map((element) => {
    if (element === "0" || element === "1") return Number(element);
  });
  numberArray = numberArray.filter((num) => typeof num === "number");
  return numberArray;[]
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
