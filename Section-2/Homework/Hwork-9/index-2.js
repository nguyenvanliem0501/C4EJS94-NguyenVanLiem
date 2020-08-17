console.log("b. n L’s and H’s in total, n entered by user");
let x = parseInt(prompt("Enter the total number of L's and H's"));
for (let index = 1; index <= x; index++) {
   if(index % 2 == 1){
       console.log("L");
   }
}
for (let index = 1; index <= x; index++) {
    if(index % 2 == 0){
        console.log("H");
    }
    
}
