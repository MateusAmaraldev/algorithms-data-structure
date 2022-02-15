function baseConverter(decNumber, base) {
  let restStack = [];
  let rest;
  let baseString = '';
  let digits = '0123456789ABCDEF';

  while (decNumber>0) {
    rest = Math.floor(decNumber % base);
    restStack.push(rest)
    decNumber = Math.floor(decNumber /base);
  }

  while (restStack.length) {
    baseString = baseString +digits[restStack.pop()]
  }

  return baseString;
}

console.log(baseConverter(125,16));