// Palindrome

function checkPalindrom(n){
    
    if(n<0){
        return false; // Edge case 1
    }
    let original = n;
    let reversed = 0;
    let remainder = 0;

    while(original > 0){
      remainder = original%10;
      reversed = (reversed*10) + remainder;
      original = Math.floor(original/10); // Edge case 2
    }
    // if(n == reversed){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return n==reversed;
}

console.log(checkPalindrom(1332));
