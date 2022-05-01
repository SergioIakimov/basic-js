const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   
  constructor(type = true) {
    this.type = type
  }

  encrypt(message, key) {
    const arrOfElems = [];
    const arrOfKeys = [];
    let count = 0;
    let maxlength = 0;
    let out = '';
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    
    for (let el of message) {
      const item = el.toUpperCase();
      if (this.alphabet.includes(item)) {
        count++;
      }
      arrOfElems.push(item);
    }

    maxlength = Math.max(count, key.length);
    
    let i = 0;

    while (key.length < maxlength) {
      key += key[i];
      i++;
    }

    for (let el of key) {
      const item = el.toUpperCase();
      const index = this.alphabet.indexOf(item);
      arrOfKeys.push(index);
    }

    let k = 0;

    for (let i = 0; i < arrOfElems.length; i++) {
      if (this.alphabet.includes(arrOfElems[i])) {
        const num = this.alphabet.indexOf(arrOfElems[i]);
        let index = num + arrOfKeys[k];
        
        while (index < 0) {
          index =  this.alphabet.length - Math.abs(index)
        }
    
        while (index >= this.alphabet.length) {
            index = index - this.alphabet.length;
        }
        
        arrOfElems[i] = this.alphabet.slice(index, index+1);
        k++;
      }
    }

    out = arrOfElems.join('');
    return this.type ? out: arrOfElems.reverse().join('');
  }

  decrypt(message, key) {
    const arrOfElems = [];
    const arrOfKeys = [];
    let count = 0;
    let maxlength = 0;
    let out = '';
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    
    for (let el of message) {
     const item = el.toUpperCase()
      if (this.alphabet.includes(el)) {
        count++;
      }
      arrOfElems.push(el);
    }

    maxlength = Math.max(count, key.length);
    
    let i = 0

    while (key.length < maxlength) {
      key += key[i]
      i++
    }

    for (let el of key) {
      const item = el.toUpperCase();
      const index = this.alphabet.indexOf(item);
      arrOfKeys.push(index);
    }

    let k = 0;
    for (let i = 0; i < arrOfElems.length; i++) {
      if (this.alphabet.includes(arrOfElems[i])) {
        const num = this.alphabet.indexOf(arrOfElems[i]);
        let index = num - arrOfKeys[k];
        while (index < 0) {
          index =  this.alphabet.length - Math.abs(index)
        }
    
        while (index >= this.alphabet.length) {
            index = index - this.alphabet.length
        }
        arrOfElems[i] = this.alphabet.slice(index, index + 1);
        k++;
      }
    }
     out = arrOfElems.join('');

    return this.type ? out: arrOfElems.reverse().join('');
  
  }
  
};


  /*encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
} */

module.exports = {
  VigenereCipheringMachine
};
