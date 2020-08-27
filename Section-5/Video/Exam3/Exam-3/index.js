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
    const newinventory = inventory[i]
    console.log(newinventory);
    // console.log(inventory[i].brand);
    const newbrand = newinventory.brand;
    console.log(newbrand);
    // if(newbrand == 'Dell'){
    //     inventoryByBrand['Dell'].push(newinventory);
    // } else if(newbrand == 'HP'){
    //     inventoryByBrand['HP'].push(newinventory);
    // } else if(newbrand == 'Asus'){
    //     inventoryByBrand['Asus'].push(newinventory);
    // }
    inventoryByBrand[newbrand].push(newinventory);

}
console.log(inventoryByBrand);  

