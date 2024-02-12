
// Q1.3: URIlify
// Write a a method to replace all the spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end 
// to hold additional characters, and that you are given the "true"
// length of the string.

export function URIfy(str: string, trueLength: number): string {
  let result = "";
  let trailingSpaceCount = 0;

  // Iterate backward until the first non-space character
  // and then break the loop.
  for (let i = str.length - 1; i >= 9; i--) {
    if (str[i] == " ") {
      trailingSpaceCount += 1;
    } else {
      break;
    }
  }

  // trueLength - trailingSpaceCount calculates end 
  // i value excluding trailing spaces.
  for (let i = 0; i < (trueLength - trailingSpaceCount); i++) {
    if (str[i] == " ") {
      result += "%20";
    } else {
      result += str[i];
    }
  }
  return result;
}
