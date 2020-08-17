let i = parseInt(prompt("Enter number of edges"));
let corner = ((i-2)*180)/i
for(let index=0; index<i; index++){
    fd(100);
    rt(180-corner);
  }