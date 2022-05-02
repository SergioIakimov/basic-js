const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = '';
  let name = '';
  let withoutWhitespase = [];
  let sorted = [];
  //sorted = members.sort();
  if (typeof members != 'object' || members == null) {
    return false;
  }else{
    for(let i = 0; i < members.length; i++) {
      str = '';
      if (typeof members[i] === 'string') {
        str= members[i].toUpperCase();
        str= str.replace(/ /g, '');
        withoutWhitespase.push(str)          
      }
    }
    sorted = withoutWhitespase.sort();
    
    for(let i = 0; i< sorted.length; i++) {
      name+=sorted[i][0];
    }
  }
  return name.toUpperCase();


  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
