//Count Digit

//Write a function that returns the count of digits in a number

let num = -2596

function countDigits(n){
    if(n==0) return 1; //Edge Case 1 -> If n = 0
    n = Math.abs(n)    // Edge Case 2 -> if n < 0
    let count = 0;
    while(n> 0){
        n = Math.floor(n/10); // Edge case 3 -> 2596/10 = 259.6 will give decimal result. Hence use Math.floor
        count ++;
    }
    return count;
}

console.log(countDigits(num));