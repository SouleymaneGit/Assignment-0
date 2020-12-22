function pairSum(nums, target) {
  if( nums.length < 2) throw "The array contain only one number";
  else{
    for(let i=0; i< nums.length; i++){
      var x = target - nums[i];
      if(nums.includes(x)) return true;
    }

    return false;
  }
}

// Do not edit this line;
module.exports = pairSum;