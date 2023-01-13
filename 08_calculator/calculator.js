const add = function(num1, num2) {
	
  result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {

  result = num1 - num2;
  return result;
	
};

const sum = function(arrayOfNum) {
	  
  let result = 0;
  
  for(let i = 0; i < arrayOfNum.length; i++){
    result += arrayOfNum[i];
  }
  return result;
  };



const multiply = function(arrayOfNum) {
  let result = 1;
  
  for(let i = 0; i < arrayOfNum.length; i++){
    result *= arrayOfNum[i];
  }
  return result;
};

const power = function(num, pow) {
  
  result = num ** pow;

  return result;
	
};

const factorial = function(num) {
    
  /* 5! = 5 * 4 * 3 * 2 * 1
              20 * 3 * 2 * 1
                60 * 2 * 1
                  120 * 1
                    120 */
      // n! = n * (n-1)!
      // n! = n * n-1 * n-2 * n-3

  if (num === 1 || num === 0) {
    return 1;
  }
      
  return num * (factorial(num - 1)); 
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
