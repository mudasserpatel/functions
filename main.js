//Defining a function for the first letter of first name
function firstLetterName(first_name) {
    alert("The name "+first_name+" starts with the letter "+first_name[0]);
}

//Defining a function to determine if a number is even or odd
function divisibleByTwo(num1) {
    var bool;
    if(num1 % 2 == 0){
        bool = true;  
    }
    else{
        bool = false;
    }
    console.log("The number "+num1+" is divisible by 2: "+ bool);
}

//Defining a function to get the largest number in an array
function largestNum(array_p){
    var x = -1000000,
    n = array_p.length;
    for(let i =0; i != n; i++){
        if(array_p[i] > x) {
            x = array_p[i];
        }
    }
    console.log(x);
}
//Call all the defined functions
firstLetterName("Mudasser");
divisibleByTwo(37);
largestNum([3,4,5,6])