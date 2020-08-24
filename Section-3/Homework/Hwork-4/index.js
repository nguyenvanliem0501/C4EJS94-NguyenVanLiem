console.log("Bai tap 4: ");
let check;
let items = ['Jean', 'T-Shirt', 'Socks'];
while(true){
     check = prompt("Hi there, welcometo shop admin panel. What do you want(C, R, U, D)");
        if(check == "r"){
            let x = "The current items are: \n";
            for (let index = 0; index < items.length; index++) {
                x += ` ${index + 1} : ${items[index]} \n` ; 
            }
            alert(x);   
        } else if(check == "c"){
            let newitem = prompt("Enter the name of the new item");
            items.push(newitem);
            alert("Done");
            console.log(items);   
        } else if(check == "u"){
            let i = Number(prompt("Enter the position you want to update"));
            let update = prompt("Enter the new name");
            items[i - 1] = update;
            alert("Done");
        } else if(check == "d"){
            let i = promp("Enter the position you want to delete");
            items.splice(2,1);
            alert("Done");
            console.log(items);
        }else{
            alert = "This command is not supported";
        }

    
}