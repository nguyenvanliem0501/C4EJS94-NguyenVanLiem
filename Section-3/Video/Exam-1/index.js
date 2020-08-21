// BÀI TẬP PHẦN VIDEO CỦA SECTION 3

//1. Khởi tạo một mảng (Initialize)
//  let movies = ['I love you', 'King of the world', 'Tieng goi noi hoang da'];
// console.log(movies);

// //2. Create thêm phần tử trong mảng(Array)
// let newItem = prompt("Enter the new item");
// movies.push(newItem);
// console.log(movies);

// //3. Read Array
// let i = prompt("Enter is index the read");
// console.log(movies[i]);

//4. Update Array
// let i = prompt("Enter is index the update");
// movies[i] = 'Dream';
// console.log(movies[i]); 
// console.log(movies);

//5. Delete Array
//5.1 Delete 1 item
// movies.splice(0, 1);
// console.log(movies);

//5.2 Delete n item in Array
// movies.splice(1, 2);
// console.log(movies);

//6. Read All Array
// let n = movies.length;
// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i]);
// }
// let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
// console.log(movie); // print all item movie
// console.log(movie[1]); // print only 1 item
// for(let i = 0; i < movie.length; i++){ // print all item movie lan luot tu 0->n (n mean item movie)
//     console.log(movie[i]);
// }

//7. Update All
// for(i = 0; i < movies.length; i++){
//     movies[i] = movies[i].toUpperCase();  
//     console.log(movies);
// }

//8. Vòng lặp While trong Array
// Vd: Viết 1 chương trình nhập n kí tự (nếu n > 15 -> hiển thị người dùng nhập name too long và ngược lại n<15 hiển thị Good name)
// let  n;

//     while(true){
//        n = prompt("Register an username");
//         if(n.length > 15){
            
//             alert("Your user is too long");
//             break;
            
//         } else{
//              alert("Good username");
//         }
//     }

//9. Viết một chương trình chạy hiển thị 4 lựa chọn, sau đó yêu cầu trả lời
// - nếu nhập lựa chọn sai vd:"hahaha" -> hiển thị ko hợp lệ và yêu cầu nhập lại (câu trả lời 1,2,3 or 4)
// - nếu lựa chọn kết quả sai hiển thị chúc may mắn lần sau
let str = 'How many legs does a spdier have?\n\n1.None\n2.4 legs\n3.8 legs\n 4. 12 legs \nAnswer this quiz?';
while (true) {
    let quiz = prompt(str);
    if (Number(quiz) == 1 || Number(quiz) == 2 || Number(quiz) == 4) {
        alert("Good luck next time!!");
    } else if (Number(quiz) == 3) {
        alert("Bravo, you are correct");
        break;
    } else {
        alert("Invalide choice, the answer must be 1, 2, 3 or 4");
    }
}






