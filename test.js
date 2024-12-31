//String Manipulation Functions:
function reverseString (str){
    let reversed= '';
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
//POUR TESTER
console.log(reverseString("Hello"));

function countCharacters(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        count++;
    }
    return count;
}
//POUR TESTER
console.log(countCharacters("Hello"));


//Array Functions:
function Max(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    return max;
}
//POUR TESTER
console.log(Max([7, 2, 9, 3, 10])); 
function Min(arr) {
    let min = arr[0];  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }

    return min; 
}
//POUR TESTER
console.log(Min([10, 4, 1, 0, 90]));

function sumArray(arr) {
    let sum = 0;  
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum; 
}
//POUR TESTER
console.log(sumArray([1, 2, 3, 4]));

function filterArray(arr, condition) {
    let filteredArray = []; 
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) { 
            filteredArray.push(arr[i]);  
        }
    }
    return filteredArray;
}
//POUR TESTER
console.log(filterArray([0, 18, 9, 10, 70], function(num) {
    return num > 10;}));


//Mathematical Functions:
function PrimeNumber(nbr) {
    let premier = true; 
    for (let i = 2; i < nbr; i++) {
        if (nbr % i == 0) {
            premier = false;  
        }
    }

    if (premier && nbr > 1) {
        console.log(nbr + " is prime");
    } else {
        console.log(nbr + " is not prime");
    }
}
//POUR TESTER
PrimeNumber(23);

function factorial(n) {
    let result = 1;  
    for (let i = 1; i <= n; i++) {
        result *= i;  
    }
    return result;  
}
//POUR TESTER
console.log(factorial(5));

function Fibonacci(n) {
    let fibonacci = [];  
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacci.push(0);  
        } else if (i === 1) {
            fibonacci.push(1);  
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }
    return fibonacci;  
}
//POUR TESTER
console.log(Fibonacci(10));



