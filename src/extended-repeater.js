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
function repeater(str, options) {
  if (!options.separator) {
    options.separator = '+';
}
if (!options.additionSeparator) {
    options.additionSeparator  = '|';
}

const repeaterAux = (separator, string = '', repeatTimes = 1) => {
    let output = [];
    for (let i = 0; i < repeatTimes; i++) {
        output.push(String(string));
    }
    return output.join(separator);
}

const fullAddition = repeaterAux(options.additionSeparator, options.addition, options.additionRepeatTimes);
options.separator = fullAddition + options.separator;


return repeaterAux(options.separator, str, options.repeatTimes) + fullAddition;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
