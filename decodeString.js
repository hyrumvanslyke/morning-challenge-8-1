function decoder(string) {
    string = string.toLowerCase() // Not necessary but nice to have in case any capital letters are thrown into the argument.
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // This is where we'll be grabbing the deciphered letter from after we coompare the one from the parameter to it in a for loop.
    let cipher = +string[0];
    // The parameter will always start with a number, so we are converting that number into an actual number data type and saving to the cipher variable.
    
    let decoded = [];
    // This is where we'll be storing the deciphered letters until they get returned at the bottom of the function.
    
    for (let i = 1; i < string.length; i++) {
      // Loop over the string parameter. We are starting at 1 because we already accessed the index of 0 when we set the ciphered variable.
      
      for (let j = 0; j < alphabet.length; j++) {
        // Make a nested for loop to loop over the alphabet variable. For every letter in the string parameter, we will compare it to every letter in the string parameter until they match.
        if(string[i] === alphabet[j]){
          // Here we're checking if the characters are the same.
  if(j + cipher > 25){
            // This is checking if the index of the alphabet character we're currently accessing (for example b would be at the index of 1) and the cipher number (from the parameter) added together equals more than the highest index in the alphabet array, which is 25.
            
            let looped = (j + cipher) - 26;
            // If the sum IS more than 25, we are going to subtract 26 from the sum to get a looped index number. The reason we subtract 26 is because it will allow us to restart at the beginning of the alphabet. We will save that difference to a variable called looped.
            
            decoded.push(alphabet[looped])
            // Here we are accessing a letter from the array at the index of the looped variable. This letter is going to be the correct letter deciphered from the cipher number, so we'll want to save it to the decoded array.
            
          } else {
            decoded.push(alphabet[j + cipher])
            // If the sum is NOT more than 25, then we'll just access the deciphered letter from the alphabet string and push it into the decoded array.
            
          }
        }
      }
    }
    return decoded.join('');
    // Since decoded is an array and the directions ask for a string, we need to join the array together when we return it.
  }