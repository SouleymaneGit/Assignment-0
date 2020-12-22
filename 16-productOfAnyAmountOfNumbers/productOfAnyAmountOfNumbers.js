function productOfAnyAmountOfNumbers(...args) {
  
  var multiple = 1;

  for(let i = 0; i < arguments.length; i++){
    multiple *= arguments[i];
  }

  return multiple;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;