import {
  calculate,
  catchIndexes,
  checkIsBinary,
  convertBinaryToStringArray,
  convertStringsToNumbers,
  run,
} from "./main";

const binaryWithCommaInput = "10,010";
const binaryInput = "10010";
const binaryStrings = ["1", "0", "0", "1", "0"];
const binaryStringsWithComma = ["1", "0", ",", "0", "1", "0"];
const notBinaryStrings = ["1", "3", "0", "1", "0"];
const binaryNumbers = [1, 0, 0, 1, 0];
const binaryIdx = 0;
const binaryWithCommaIdx = -3;
const decimal = 18;

describe("Binary to decimal convert", () => {
  it("should be able to split a binary numbers in a array", () => {
    expect(convertBinaryToStringArray(binaryInput)).toEqual(binaryStrings);
    expect(convertBinaryToStringArray(binaryInput)).toEqual(
      expect.arrayContaining(["1", "0"])
    );
  });

  it("should be able to split a binary numbers with comma in a array", () => {
    expect(convertBinaryToStringArray(binaryWithCommaInput)).toEqual(
      binaryStringsWithComma
    );
    expect(convertBinaryToStringArray(binaryWithCommaInput)).toEqual(
      expect.arrayContaining(["1", "0", ","])
    );
  });

  it("should be able to validate if the string is a binary number", () => {
    expect(checkIsBinary(binaryStrings)).toEqual(true);
  });

  it("should be able to validate if the string is not a binary number", () => {
    expect(checkIsBinary(binaryStrings)).toEqual(true);
  });

  it("should be able to validate if the string is a binary number", () => {
    expect(checkIsBinary(notBinaryStrings)).toEqual(undefined);
  });
  it("should be able to catch the index for use him in calcule", () => {
    expect(catchIndexes(binaryStrings)).toEqual(binaryIdx);
  });
  it("should be able to catch the index for use him in calcule when binary has comma", () => {
    expect(catchIndexes(binaryStringsWithComma)).toEqual(binaryWithCommaIdx);
  });
  it("should be able to transform the strings array in numbers array", () => {
    expect(convertStringsToNumbers(binaryStrings)).toEqual(binaryNumbers);
  });
  it("should be able to calculate the binary conversion to decimal", () => {
    expect(calculate(binaryNumbers, binaryIdx)).toEqual(18);
  });
  it("should be able to call the other methods and return the decimal number", () => {
    expect(run(binaryInput)).toEqual(decimal);
  });
});
