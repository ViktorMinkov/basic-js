const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result ={}
   let array = []
   domains.forEach(el => {
    for(let i = 0;i <el.length;i++) {
      if(el[i] === '.' || i === 0 ) {
        let sliced = el.slice(i,el.length)
        array.push(sliced)
      }
    }
   })
  let finalArray = array.map(el => {
    let element = el.split('.').reverse().join('.');
    element = '.' + element
    if(element[element.length-1] === '.')
    element = element.slice(0,-1)
    return element
  })
  finalArray.forEach(el => {
    result[el] = (result[el] || 0)+1
  })
   return result
}

module.exports = {
  getDNSStats
};
