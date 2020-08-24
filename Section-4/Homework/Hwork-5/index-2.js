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
let i = Number(prompt("Enter product position"));
for(let x in products[i]){
    console.log(`${x} : ${products[i][x]}`);
}