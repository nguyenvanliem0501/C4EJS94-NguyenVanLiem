console.log("Bai tap 5");
let str = prompt("Enter a sequence of numbers separated by commas(,)");
let a = str.split(",").map(Number);
let sum = 0;
 for (let i = 0; i < a.length; i++) {
    sum += Number(a[i]);
    
 }
 alert("The sum of them is " + sum);