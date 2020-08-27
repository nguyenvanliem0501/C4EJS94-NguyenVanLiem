const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    
    },
    
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    
    {
        name: 'Asus Zenbook',
        price: 20000,
        brand: 'Asus',
        quantity: 4,
    },
    
    {
        name: 'HP Pavilion',
        price: 14000,
        brand: 'HP',
        quantity: 7,
    },
];
let inventoryByBrand = {
    "Dell": [],
    "HP": [],
    "Asus": [],
}
for(let i = 0; i < inventory.length; i++){
    var newinventory = inventory[i]
    console.log(newinventory);
    // console.log(inventory[i].brand);
    var newbrand = newinventory.brand;
    console.log(newbrand);

    inventoryByBrand[newbrand].push(newinventory);
}
console.log(inventoryByBrand);
let item = prompt("Which Brand?");
if(inventoryByBrand[item]){
    let str =  `There are ${inventoryByBrand[item].length} ${inventoryByBrand[item].length == 1 ? 'generations':'generation'} of ${item.toLocaleUpperCase()} in inventory `;
    let price = 0;
    for(let a of inventoryByBrand[item]){
        str += '\n' + a.name;
        price += a.price * a.quantity * 1000;
    }
    str += `\nWith total value: ${price.toLocaleString('vi-VN')}VND`;
    alert(str);
} else{
    alert(`Don't have ${item.toLocaleUpperCase()} in inventory`);
}