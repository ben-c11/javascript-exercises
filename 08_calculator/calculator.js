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
    

  if(num === 1 || num === 0) {
    return 1;
  }

  for(let i = num -1; i >= 1; i--){
    num = num * i;
  }
  
  return num;
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
