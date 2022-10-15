const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let belowZero = []
  let aboveZero = []
  let result = []
  arr.forEach(el => {
    if(el < 0) {
      belowZero.push(el)
    }else{
      aboveZero.push(el)
    }
  })
  aboveZero.sort((a,b) => b - a)

  arr.forEach(el => {
    if(el < 0) {
      result.push(belowZero.pop())
    }else{
      result.push(aboveZero.pop())
    }
  })
  return result
}

module.exports = {
  sortByHeight
};
