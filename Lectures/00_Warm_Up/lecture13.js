// Reverse a signed 32-bit Integer (num should not be greater then 2 to power 31)

function reverse(n){
    
    let original = Math.abs(n);
    let reversed = 0;
    let remainder = 0;

    while(original > 0){
      remainder = original%10;
      reversed = (reversed*10) + remainder;
      original = Math.floor(original/10); // Edge case 2
    }
    // if(n<0){
    //     return -reversed;
    // }
    // else return reversed;

    let limit = 2**31 // Edge case for 32 bit-integer
  //let limit = Math.pow(2,31);

   if(rev < -limit || rev > limit) return 0;

    return n<0 ? -reversed : reversed
}

console.log(reverse(-1332));
