const palindromes = function (string) {
      
    string = string.toLowerCase();
    string = removePunct(string);
   
    let palindrome = string;
    
    palindrome = palindrome.toLowerCase();
  
    palindrome = removePunct(palindrome);

    palindrome = reverseString(palindrome);

    if (palindrome === string){
      return true;
    } else {
      return false;
    }
    
  }; 


  const reverseString = function(string) {
  
    newString = '';
    for (let i = string.length -1 ; i >= 0; i--){
        newString = newString + string[i];
      }
      return newString;
  };

  function removePunct(string){
    
    let newString = '';

    for(let i = 0; i < string.length; i++){
      if (string.charCodeAt(i) > 47){
        newString += string[i];
      } 
    }
    return newString;
  }
// Do not edit below this line
module.exports = palindromes;
