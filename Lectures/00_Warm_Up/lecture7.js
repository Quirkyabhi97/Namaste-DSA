// Write a function that searches for an eleqment in an array and returns its index.
//  If the element is not found, return -1.

let arr1 = [4,2,0,10,8,30]

function searchInArray(array, element){
 for(let i=0;i<array.length;i++){
    if(array[i]==element){
        return i;
    }
 }
 return -1
}

console.log(searchInArray(arr1,9));

// Write a function that returns number of negetive numbers in an array

let arr2 = [2,-9,17,0,-1,-10,-4,8]

function countNegetive(array){
    let count = 0;
    for(let i=0;i<array.length;i++){
      if(array[i]<0){
        count++;
      }
    }
    return count;
}

console.log(countNegetive(arr2));

// write a function that returns largest number in an array

let arr3 = [13,0,7,10,8,15,1]

let searchLargest = (array) => {
     let largest = -Infinity;

     for(let i=0;i<array.length;i++){
      if(array[i]>largest){
        largest = array[i];
      }
     }

     return largest;
}

console.log(searchLargest(arr3));

// write a function that returns smallest number in an array

let arr4 = [13,-1,7,10,8,15,1]

let searchSmallest = (array) => {
     let smallest = Infinity;

     for(let i=0;i<array.length;i++){
      if(array[i]<smallest){
        smallest = array[i];
      }
     }

     return smallest;
}

console.log(searchSmallest(arr4));