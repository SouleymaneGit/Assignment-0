function frequencyCounter(word) {
  
  var obj={};

  for(let i=0; i<word.length; i++){
    if(obj[word.charAt(i)] === undefined) obj[word.charAt(i)] = 1;
    else obj[word.charAt(i)]++;
  }
  
  return obj;

}

// Do not edit this line;
module.exports = frequencyCounter;