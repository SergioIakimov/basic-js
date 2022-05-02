const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    value === '' ? this.chain.push('( )') : this.chain.push(`(${value})`);
    return this;

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    if (this.chain[position] && typeof position === 'number' && position!=0) {
      this.chain = [...this.chain.slice(0,position-1),
                    ...this.chain.slice(position),];
      return this;
    }else{
      this.chain = [];
      throw new Error('Incorect link');
    }

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    this.chain = [];
    return this;

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
