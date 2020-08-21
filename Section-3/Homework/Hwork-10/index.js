let names = prompt("Enter a sequence of names");
let arr = names.split(",");
let arr1 = arr.map(x => "<" + x + ">");
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
    if (i== (arr1.length - 1)) {
        str += arr1[i];
    } else {
        str += arr1[i] + ", ";
    }

}
alert(str);