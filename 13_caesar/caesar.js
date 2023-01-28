const caesar = function(string, cipher) {
    // charCodeAt() - gives the value of the letter.
    let cipherText = '';
    

    for (let i = 0; i < string.length; i++){
      let charCode = string.charCodeAt(i); 
    
      // Check if character is a letter
      if ((charCode >= 65 && charCode <= 90) || 
          (charCode >= 97 && charCode <= 122)){
      
        if (cipher < 0){
          // lower bound
            let j = 0;

            while(j > cipher){
              if (charCode < 65 ||
                 (charCode <= 97 && charCode >= 90)){
                    
                    charCode += 26;
              }

              charCode--;
              j--;
            }
          } else{
            // upper bound
            let k = 0;

            while (k < cipher){
              if ((charCode >= 90 && charCode < 97) || charCode >= 122){
                charCode -= 26;   
              }

              charCode++;
              k++;
            }
          }
        }
      
        cipherText += String.fromCharCode(charCode);
      }
      return cipherText;
    }

// Do not edit below this line
module.exports = caesar;
