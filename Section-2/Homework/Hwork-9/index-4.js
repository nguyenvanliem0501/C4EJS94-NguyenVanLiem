console.log("d. n 1’s and 0’s in total, consecutively, n entered by user");
let x = parseInt(prompt("Enter the total number of 1's and 0's"));
for (let index = 1; index <= x; index++) {
  if(index % 2 == 1 ){
      console.log("0");
  }else{
      console.log("1");
  }
    
}