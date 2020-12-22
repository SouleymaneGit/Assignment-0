function sumOfNumsWithinARange(nums, start, end) {
  
  var result = nums.filter(myFunction); // array of desire values 

  function myFunction(value, index, nums) {
    return (value >= start && value <=end);
  }
  
  return result.length;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;