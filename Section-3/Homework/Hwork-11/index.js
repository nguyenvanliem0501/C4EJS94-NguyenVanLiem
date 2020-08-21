let numbers = prompt("Enter a sequence number");
let arr = numbers.split(",");
let arr1 = arr.filter(x => x %2 == 1);
let str = "";
for (let i = 0; i < arr.length; i++) {
    if (i == (arr.length - 1)) {
        str += arr[i];
    } else {
        str += arr[i] + ", ";
    }
}
str += " => ";
for (let i = 0; i < arr1.length; i++) {
    if (i == (arr1.length - 1)) {
        str += arr1[i];
    } else {
        str += arr1[i] + ", ";
    }

}
alert(str);