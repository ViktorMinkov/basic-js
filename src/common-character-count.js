const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let counter = 0;
  let firstArray = [...s1]
  let secondArray = [...s2]

  let length = secondArray.length > firstArray.length ? secondArray.length : firstArray.length
  for(let i = 0;i <length;i++) {
    if(secondArray.includes(firstArray[i])) {
      secondArray.splice(secondArray.indexOf(firstArray[i]),1)
      counter++
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
