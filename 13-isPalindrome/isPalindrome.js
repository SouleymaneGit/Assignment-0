function isPalindrome(word) {
  let i=0, j=word.length -1;

  while(i < j){

    if(word.charAt(i) !== word.charAt(j)) return false;
    else{
      i++;
      j--;
    }

  }

  return true;

}

// Do not edit this line;
module.exports = isPalindrome;