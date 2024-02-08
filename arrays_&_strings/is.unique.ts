// Q1.1
// Implement an algorithm to determine id a string has all unique 
// characters. What if you cannot use additional data structures?
export default function isUnique(string: string): boolean {
  let uniqueObj: { [key: string]: string } = {};

  for (let i = 0; i < string.length; i++) {

    // undefined means a character is not there and hence add to the 
    // uniqueObj and continue with others. Else, the character is 
    // already present so, return false, indicating non-uniqueness.
    if (uniqueObj[string[i]] === undefined) {
      uniqueObj[string[i]] = i.toString();
    } else {
      return false;
    }
  }
  return true;
}
