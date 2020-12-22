function fizzBuzz(start, end) {
  var result = [];
  for(let i=start; i<= end; i++){

    if((i % 3 === 0) && (i % 5 === 0)) result.push("FizzBuzz");
    else if(i % 5 === 0) result.push("Buzz");
    else if(i % 3 === 0) result.push("Fizz");
    else result.push(i);
  }

  return result;
}

// Do not edit this line;
module.exports = fizzBuzz;