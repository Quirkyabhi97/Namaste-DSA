// Find Second largest number in an array

let arr1 = [4, 9, 10, 2, 8, 7, 1];

function secondLargest(arr) {
//Edge case 1 - None or one element in array  
if(arr.length<2){
    return null;
}
  let largest = -Infinity;
  let secLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secLargest) { //Edge Case 2 - Duplicate Largest element
      secLargest = arr[i];
    }
  }
  return secLargest;
}

console.log(secondLargest(arr1));
