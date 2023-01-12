const leapYears = function(leapYear) {
    /* divisible by 4. If divisible by 100 != leap
    unless divisible by 400....
    1900 - divisible by 4 and 100 not 400 != leap.*/

   if (leapYear % 4 === 0){
      label: if (leapYear % 100 === 0 && leapYear % 400 === 0){
        
        break label;
      } else if(leapYear % 100 === 0){
        
        return false;
      }
      
      return true;
    } else {
      return false;
    }

  };

// Do not edit below this line
module.exports = leapYears;
