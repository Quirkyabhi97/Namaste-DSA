// Time and space complexity

// 1) Find 5th element of an array

let array1 = [1,2,3,4,5]

function fifthElement(arr)  {
return arr[4];   // Time -> O(1) || Space -> O(1)
}


// 2)Find maximum element in an array

function maxElement(arr){
    let max = a[0]; //consume extra space for variable declaration || space = O(1)
    for(let i=0;i<arr.length;i++){ // loop will run arr.length = n times || Time = O(n)
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

// 3) Return Double of an array

function doubleArray(arr){
    let newArr = []; // new array on n size, each element will cosume one space => 1*n = n || space = O(n)
    for(let i=0;i<arr.length;i++){  // loop run n time || Time = O(n)
        newArr[i] = 2*arr[i];
    }
    return newArr;
}

// 4) Return 2 dimensional array, each row will be double of previous row // spacev = O(n*n) = O(n^2)

// 5) if  2 independent loops run one after another => Time = n + n => O(2*n) => 2 will be redundant => hence > O(n) 

// 6) if  2 nested loops run and  another independent loop => Time = n*n + n => O(n^2 + n) => n will be redundant => hence > O(n^2) 

// Note -> Complexity will be determined based on the highest order of n