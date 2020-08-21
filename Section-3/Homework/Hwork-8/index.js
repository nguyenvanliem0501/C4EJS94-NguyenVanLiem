console.log("Phan 8.1:");
console.log("Hello, my name is phuong nam and here is my sheep sizes:");
const sizes = [5, 7, 300, 90, 24, 50, 75];
console.log(...sizes);
console.log("Phan 8.2");
let maxSize = Math.max(...sizes);
console.log("Now my bigget sheephas size " + maxSize + " , Let's shave it");
console.log("Phan 8.3");
console.log("After shearing, here is my flock");
sizes[sizes.indexOf(maxSize, 0)] = 8;
console.log(...sizes);
console.log("Phan 8.4 and 8.5");
for (let i = 1; i < 4; i++) {
    console.log("MONTH " + i);
    console.log("One month has, passsed, my sheeps have grown, here are their sizes");
    for (let i = 0; i < sizes.length; i++) {
        sizes[i] += 50;
    }
    let maxSize = Math.max(...sizes);
    console.log(...sizes);
    console.log("Now my bigget sheephas size " + maxSize + " , Let's shave it");
    console.log("After shearing, here is my flock");
    sizes[sizes.indexOf(maxSize, 0)] = 8;
    console.log(...sizes);
   
    for (let i = 0; i < sizes.length; i++) {
        let sum = 0;
        sum += Number(sizes[i]);
        console.log("\nMy flock has size in total: " + sum);
        console.log(`I would get ` + sum + ` * 2$ = ${sum * 2}`)
    }
}

