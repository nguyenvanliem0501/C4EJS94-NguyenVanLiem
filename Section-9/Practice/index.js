async function load() {
    const conn = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR3_WhvKAZVRkA4BM8Ek7gVNvJqsBRzfbjrjNiI3ovKja1iz8VodIVmhCXw");
    const data = await conn.json();
    return data;
}
const myId = load();
console.log(myId);
