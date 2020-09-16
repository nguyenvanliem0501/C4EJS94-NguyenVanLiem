let arr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey',
     'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];

let result = {};
for(let i = 0; i < arr.length; i++){
    if(!result[arr[i]]){
        result[arr[i]] = 0;
        result[arr[i]]++;
    }else{
        result[arr[i]] ++;
}
}
 console.log(result);
// function count(arr) {
//     return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
//   }
// console.log(count(arr));

