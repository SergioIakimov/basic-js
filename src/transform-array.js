const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let transArray = [];
    let dN = '--discard-next';
    let dP = '--discard-prev';
    let dbN = '--double-next';
    let dbP = '--double-prev';

    if (!Array.isArray(arr)) {
            throw new Error("'arr' parameter must be an instance of the Array!");
   
    }
    
    if (arr == []){
            return transArray;
    }else{ for (let i = 0; i<arr.length; i++) {
                if (arr[i] !=dN && arr[i] !=dP && arr[i] != dbN && arr[i] != dbP)  {
                    transArray.push(arr[i]);
                }else if (arr[i] === dN && (i+1)<arr.length) {
                    i++;
                }else if (arr[i] === dP && i>0) {
                    transArray.pop();
                }else if (arr[i] === dbN && (i+1)<arr.length) {
                    transArray.push(arr[i+1]);
                }else if (arr[i] === dbP && i>0) {
                transArray.push(arr[i-1])
                }
            
        }
        return transArray;
    }   
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  };

module.exports = {
  transform
};
