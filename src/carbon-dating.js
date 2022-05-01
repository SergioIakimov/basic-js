const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if (typeof sampleActivity != 'string' || typeof sample != 'number' || typeof sampleActivity === 'undefined' || isNaN(sample)|| sample<=0 || sample>15) {
    return false;
  }else{
    return (Math.ceil((Math.log(MODERN_ACTIVITY/sample)*HALF_LIFE_PERIOD)/0.693));
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
