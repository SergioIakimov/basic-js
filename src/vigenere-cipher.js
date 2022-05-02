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
   
  constructor(direction = true) {
    this.direction = direction
  }

  encrypt(message, key) {
    const arrOfElems = [];
    const arrOfKeys = [];
    let count = 0;
    let maxlength = 0;
    let output = '';
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    
    for (let letter of message) {
      const item = letter.toUpperCase();
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

    for (let letter of key) {
      const item = letter.toUpperCase();
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

    output = arrOfElems.join('');
    return this.direction ? output: arrOfElems.reverse().join('');
  }

  decrypt(message, key) {
    const arrOfElems = [];
    const arrOfKeys = [];
    let count = 0;
    let maxlength = 0;
    let output = '';
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    
    for (let letter of message) {
     const item = letter.toUpperCase()
      if (this.alphabet.includes(letter)) {
        count++;
      }
      arrOfElems.push(letter);
    }

    maxlength = Math.max(count, key.length);
    
    let i = 0

    while (key.length < maxlength) {
      key += key[i]
      i++
    }

    for (let letter of key) {
      const item =letter.toUpperCase();
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
     output = arrOfElems.join('');
    return this.direction ? output: arrOfElems.reverse().join('');
  }
  
};

module.exports = {
  VigenereCipheringMachine
};
