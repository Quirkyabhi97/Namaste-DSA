// Star Pattern

// Pattern 1 -> stars in square shape

function printStarsSquare(n){

    for(let i=0; i<n; i++){
        let row = ""
        for(let j=0;j<n;j++){
            row = row + " * ";
        }
        console.log(row);
    }
}

printStarsSquare(5);

//Pattern 2 ->   stars in right angle triangle shape
function printStarsRightTriangle(n){

    for(i=0; i<n; i++){
        let row = "";
        for(let j=0; j<=i; j++){
            row = row + " * ";
        }
        console.log(row);
    }
}

printStarsRightTriangle(5);

// Pattern 3 ->  numbers in right angle triangle shape -> {1} {1,2} {1,2,3} {1,2,3,4} {1,2,3,4,5}

function printNumRightTriangle(n){

    for(i=1; i<=n; i++){
        let row = "";
        for(let j=1; j<=i; j++){
            row = row + " " + j
        }
        console.log(row);
    }
}

printNumRightTriangle(5);

// Pattern 4 ->  numbers in right angle triangle shape -> {1} {2,2} {3,3,3} {4,4,4,4} {5,5,5,5,5}

function printNumRightTriangle2(n){

    for(let i=1; i<=n; i++){
        let row = "";
        for(let j=1; j<=i; j++){
            row = row + " " + i;
        }
        console.log(row);
    }
}

printNumRightTriangle2(5);

// Pattern 5 ->  numbers in inverted right angle triangle shape ->  {1,2,3,4,5} {1,2,3,4} {1,2,3} {1,2} {1}   

function printInvertedNumRightTriangle(n){

    for(let i=n; i>=1; i--){
        let row = "";
        for(let j=1;j<=i;j++){
            row = row + " " + j;
        }
       console.log(row);
    }
}

printInvertedNumRightTriangle(5);

// Pattern 6 ->  stars in mirror right angle triangle shape 

function printMirrorStarsRightTriangle(n){

    for(let i=1; i<=n; i++){
        let row = "";
        for(let j=1;j<=(n-i);j++){
            row = row + " . ";
        }
        for(let k=1;k<=i;k++){
            row = row + " * "
        }
       console.log(row);
    }
}

printMirrorStarsRightTriangle(5);

// Pattern 7 ->  Alternate binary Numbers in Right Triangle shape -> {1} {1,0} {1,0,1} {1,0,1,0} {1,0,1,0,1}

function printAlternateBinaryNumRightTriangle(n){

    for(let i=1; i<=n; i++){
        let row = "";
        for(j=1;j<=i;j++){
            if(j%2 == 0){
                row = row + 0 // Alternate approach is to keep a flag, initialize value with 1 and keep switching it's value to 0 and 0 to 1 on each iteration.
            }
            else{
                row = row + 1
            }
        }
       console.log(row);
    }
}

printAlternateBinaryNumRightTriangle(5);

// Pattern 8 ->  Alternate binary Numbers in Right Triangle shape -> {1} {0,1} {0,1,0} {1,0,1,0} {1,0,1,0,1}

function printAlternateBinaryNumRightTriangle2(n){
    let flag = 1;
    for(let i=1; i<=n; i++){
        let row = "";       
        for(j=1;j<=i;j++){
             row = row + flag;
            if(flag == 0){
                flag = 1 
            }
            else{
                flag = 0;
            }
            
        }
       console.log(row);
    }
}

printAlternateBinaryNumRightTriangle2(5);





