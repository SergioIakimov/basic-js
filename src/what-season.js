const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {

  var seasonArray = ['winter','winter','winter','winter','spring', 'spring','spring','spring','summer','summer', 'summer', 'summer','autumn', 'autumn', 'autumn', 'autumn'];
  let season= '';


  if (typeof date != 'object' || date == null) {
    throw new Error("error");
  }else if (typeof date === 'undefined') {
      return 'Unable to determine the time of year!';
    } else {return seasonArray[date.getMonth()];}

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
