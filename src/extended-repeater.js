const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let mainStr = String(str)
  let addition = String(options.addition)
  
  let resultStr = ''
  
  //str + (addition + additionSeparator) + separator
  let mainCounter = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  for(let i = 0;i < mainCounter;i++) {
    let mainSeparator = options.separator !== undefined ? options.separator : '+';
    if(i>0) {
      resultStr += mainSeparator
    }
    resultStr += mainStr
    if(options.addition !== undefined) {
      let additionCounter = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
      for(let j = 0;j <additionCounter;j++) {
        let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|'
        if(j>0) {
          resultStr += additionSeparator
        }
        resultStr += addition
      }
    }
  }

  return resultStr
}

module.exports = {
  repeater
};
