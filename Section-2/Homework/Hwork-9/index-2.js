console.log("b. n L’s and H’s in total, n entered by user");
let x = parseInt(prompt("Enter the total number of L's and H's"));
let Low = "L";
let High = "H";
for (let index = 0; index < x; index++) {
   if(index < x/2){
       console.log(Low);
   } else{
       console.log(High);
   }
}

