// Fuctions & Conditional Statements

//program to check the eligibility of a person to vote
function eligibility(name, age){
    if(age<0){
        console.log("incorrect input");
    }
    if(age<18){
        console.log(name + " is not eligible to vote");
    }
    else{
        console.log(name + " is eligible to vote ");
    }
}

eligibility("Tany",-19);



//program to check if a number is even or odd
function evenOdd(num){
    if(num%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

evenOdd(17);