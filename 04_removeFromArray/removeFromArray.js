const removeFromArray = function(array, ...num ) {

    let removedItems = [];
    for (let k = 0; k < array.length * num.length; k++) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < num.length; j++){
          if (num[j] === array[i]){
            removedItems = array.splice(i,1);
          }
        }
      }
    } 
  return array;
  
  };

// expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
// Do not edit below this line
module.exports = removeFromArray;
