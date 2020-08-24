let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'while',
        category: 'charger',
    },
    {
        name: 'VSmart active 1',
        brand: 'Vsmart',
        price: 5438,
        color: 'black',
        category: 'phone',
    },
    {
        name: 'Iphone X',
        brand: 'Apple',
        price: 21490,
        color: 'gray',
        category: 'phone',
    },
    {
        name: 'SamSung Galaxy A9',
        brand: 'SamSung',
        price: 8490,
        color: 'blue',
        category: 'phone',
    },
];
products[0].providers = ['Phu kien zero','Dientuccc'];
products[1].providers = ['tgdd','ddghn','vhstore'];
products[2].providers = ['tgdd'];
products[3].providers = ['tgdd'];
let provid = prompt("Enter provider?");
for (let i = 0; i < products.length; i++) {
    for (let a = 0; a < products[i].providers.length; i++) {
        if(products[i].providers[a] == provid){
            console.log("-----------------------");
            console.log(`Name : ${products[i].name}`);
            console.log(`Brand : ${products[i].brand}`);
            console.log(`Price : ${products[i].price}`);
            console.log(`Color : ${products[i].color}`);
            console.log(`Category : ${products[i].category}`);
            console.log(`providers : ${products[i].providers}`);
            break;
        }
        
    }
    
}