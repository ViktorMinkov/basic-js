const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    if(this.array) {
      return this.array.length
    }
  },
  addLink(value) {
    let newValue = value !== undefined ? value :'()'
    if(this.array) {
      this.array.push(`( ${newValue} )`)
    }else {
      this.array = []
      this.array.push(`( ${newValue} )`)
    }
   return this
  },
  removeLink( position ) {
    if(typeof position !== 'number' ||!Number.isInteger(position) || position < 1 || position > this.array.length - 1) {
      delete this.array
      throw new Error(`You can't remove incorrect link!`)
    }
    this.array.splice(`${position-1}`, 1)
    return this
  },
  reverseChain() {
    if(this.array) {
      this.array.reverse()
    }
    return this
  },
  finishChain() {
    if(this.array) {
      let finish = this.array.join('~~')
      delete this.array
     return finish
    }
  }
};

module.exports = {
  chainMaker
};
