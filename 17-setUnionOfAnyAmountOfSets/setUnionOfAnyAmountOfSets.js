function setUnionOfAnyAmountOfSets(...args) {
  let setResult = new Set();

  for(let i = 0; i < arguments.length; i++){
    for(let x of arguments[i]){
     if(!setResult.has(x)) setResult.add(x);
    }
     
  }

  return setResult;

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;