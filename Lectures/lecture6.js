// Loops in JavaScript

// For loop
for(let i=2;i<9;i=i+2){
    console.log("Print success");
}

for(let i=5;i>0;i--){
    console.log("Print success " + i + " times");
}

function greet(){
    console.log("Hello Abhinav");
}

for(let i=0;i<3;i++){
    greet();
}

// Print even numbers from an array

let arr = [1,4,7,8,10]

for(let i =0;i<arr.length;i++){
    if(arr[i]%2 == 0){
        console.log(arr[i] + " is even");
    }
}

// While loop

let j = 0;

while(j<3){
    console.log("Hello Abhinav");
    j++;
}