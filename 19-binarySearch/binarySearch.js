class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {

    if(nums.length <1) return false;
    else{
      let start = 0 ,end = nums.length;
      let midpoint = Math.floor((start + end)/2);
      if(nums[midpoint] === target) return true;
      else if(target < nums[midpoint]) return this.binarySearch(nums.slice(0, midpoint), target);
      else return this.binarySearch(nums.slice(midpoint+1, nums.length), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;