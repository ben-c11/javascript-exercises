const sumAll = function(startNum, endNum) {

    arrayOfNum = [];
    for(let i = startNum; i < endNum; i++){
        arrayOfNum += i; 
    }
    console.log(arrayOfNum)
    /*
cant just do for(i = startNum; i < endNum; i++) as one test goes backwards.
    
    create array [start-end] 
    then loop through the array

  */  
};

// Do not edit below this line
module.exports = sumAll;
/*
1 2 3 4

1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
*/