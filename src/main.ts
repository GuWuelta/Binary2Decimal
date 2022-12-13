function convertBinaryToStringArray(binary: string) {
  const stringArray = binary.split("");
  return stringArray;
}

function catchIdxs(stringArray: string[]) {
  if (stringArray.includes(".")) {
    const dotPosition = stringArray.indexOf(".");
    stringArray[dotPosition].replace(".", ",");
  }
  const commaPosition = stringArray.indexOf(",");
  const numsAfterComma = stringArray.slice(commaPosition + 1);
  let idxs = numsAfterComma.length;
  return -idxs;
}

function convertStringArrayToNumberArray(stringArray: string[]) {
  const numberArray = stringArray.map((element) => {
    if (element !== ",") return element;
  });
  return numberArray;
}
