
Function.prototype.mycall = function(thisArg, ...args) {
    // your code here
    thisArg = !!thisArg?Object(thisArg): window
    let y = Symbol();
    thisArg[y] = this;
    let res = thisArg[y](...args)
    delete thisArg[y]
    return  res
  }
  