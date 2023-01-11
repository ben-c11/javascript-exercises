const sumAll = function(startNum, endNum) {

    console.log('startNum: ' + startNum + ' Typeof: ' + typeof(startNum))
    console.log('endNum: ' + endNum + ' Typeof: ' + typeof(endNum))
    
    let arrayOfNum = [];
    let arrayOfString = [];
    let result = 0;
    
    
    if (typeof(startNum) === 'number'  && typeof(endNum) === 'number'){ 
      if(startNum > 0 && endNum > 0){
        if(endNum > startNum){
          // arrayOfNum elements to be converted from strings to int.
          // the loop populates both strings and convers in one step.
          for(let i = startNum; i <= endNum; i++){
            arrayOfString += arrayOfNum.push(parseInt(i));
          }
  
          for (let i = 0; i < arrayOfNum.length; i++){
            result += arrayOfNum[i];
          }
          
          return result;
  
        } else if(endNum < startNum){
          for(let i = startNum; i >= endNum; i--){
            arrayOfString += arrayOfNum.push(parseInt(i));
          }
  
          for (let i = 0; i < arrayOfNum.length; i++){
            result += arrayOfNum[i];
          }
  
          return result;
        } 
      }
      else if(startNum < 0 || endNum < 0){
        return 'ERROR';
      } else {
        
        return 'ERROR';
      } 
    } else{
      return 'ERROR';
    }
    
  };
// Do not edit below this line
module.exports = sumAll;
