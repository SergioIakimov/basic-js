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
    function repeaterAux (separator, aux = '', repeatitions = 1) {
      let output = [];
      for (let i = 0; i < repeatitions; i++) {
          output.push(String(aux));
      }
      return output.join(separator);
  }

    const additionalPart = repeaterAux(options.additionSeparator, options.addition, options.additionRepeatTimes);
    options.separator = additionalPart + options.separator;


    return repeaterAux(options.separator, str, options.repeatTimes) + additionalPart;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
  repeater
};
