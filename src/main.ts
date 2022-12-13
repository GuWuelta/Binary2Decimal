function convertBinaryToStringArray(binary: string) {
  const stringArray = binary.replace(".", ",").split("");
  return stringArray;
}

function catchIdxs(stringArray: string[]) {
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
  return numberArray.filter((num) => typeof num === "number");
}

function calculate(numberArray: number[], idx: number) {
  numberArray.reduceRight((acc, cur, idx) => {
    acc += cur * 2 ** idx;
    return acc;
  }, 0);
}
