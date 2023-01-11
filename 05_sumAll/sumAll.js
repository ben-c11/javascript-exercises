const sumAll = function(startNum, endNum) {

    let arrayOfNum = [];
    let arrayOfString = [];
    let result = 0;
  // arrayOfNum elements to be converted from strings to int.
  // the loop populates both strings and convers in one step.
    for(let i = startNum; i <= endNum; i++){
      arrayOfString += arrayOfNum.push(parseInt(i));
    }
  
    for (let i = 0; i < arrayOfNum.length; i++){
      result += arrayOfNum[i];
    }
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
/*
1 2 3 4

1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
*/