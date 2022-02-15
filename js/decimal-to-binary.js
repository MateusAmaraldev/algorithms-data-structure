function decimalToBin(decimal) {
  let restStack = [],
    rest,
    binaryString = ''
  while (decimal > 0) { //25
    rest = Math.floor(decimal % 2)
    restStack.push(rest)
    decimal = Math.floor(decimal / 2);
  }
  while (restStack.length > 0) {
    binaryString += restStack.pop().toString()
  }

  return binaryString
}

console.log(decimalToBin(25));