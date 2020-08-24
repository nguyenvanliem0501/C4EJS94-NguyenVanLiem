// BÀI TẬP VÀ CÁC THAO TÁC VỀ OBJECT
//1. Init object
// let movie = {}; // Khai bao 1 object rỗng
// console.log(movie);
// Khai bai 1 object vs day du cac thuoc tinh
// let movie = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };
// console.log(movie);

//2. Read object
//Exam-1
// C1
// let movie = {
//     title: 'The K2',
//     year: 2017,
//     rate: 9.2,

// };
// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rate);
//C2
// console.log(movie['title']);
// console.log(movie['year']);
// console.log(movie['rate']);
//C3
// let prop = movie.title;
// console.log(prop);
// let  y = movie.year;
// console.log(y);
// let r = movie.rate;
// console.log(r);

// Log 1 property-value khong co trong object thi result se ra sao?
// console.log(movie.actor); // => result se bao undefined

//Exam-2. Khởi tạo 1 list, và thêm 1 thứ bạn thích vào cuối list này, sau khi thêm cần in ra list mới
// let favorist = {
//     sport: 'foodball',
//     game: 'lol',
//     music: 'bigbang',
// };
// // console.log(favorist);
// let a = favorist.sport;
// console.log(a.toUpperCase);
// console.log(favorist.music);
// console.log(favorist.game);

//Exam-3
// let movie = {
//     title: 'Love',
//     year: 2020,
//     rate: 8.2,
// };
// let prop = prompt("Enter the value");
// let a = movie[prop];
// if(a == null || a == undefined){
//     alert('is not value');  
// } else{
//     console.log(movie[prop]);
// }

// Update object
// Exam-1
// let movie = {
//     title: 'Love',
//     year: 2020,
//     rate: 8.2,
// };
// console.log(movie.rate);
// movie.rate = 8.7;
// console.log(movie.rate);
// movie.rate++;
// console.log(movie.rate);

// Exam-2
// let movie = {
//     title: 'love',
//     year: 2020,
//     rate: 8.2,
// };
// let prop = prompt("What you want to update?");
// let a = movie[prop];
// if(a == null || a == undefined){
//     alert('Not is object to update');
// } else{
//     let x = prompt("What is the update?");
//     movie[prop] = x;
//     console.log(movie);

// }

// Create object
// Exam-1
// let movie = {
//     title: 'love',
//     year: 2020,
//     rate: 8.2,
// }
// let prop = prompt("What you want to update?");
// let a = movie[prop];
// if(a == null || a == undefined){
//     // alert(`${prop} does not exist in our date, we will add new`);
//     let x = prompt("Enter the new data");
//     movie['review'] = x;
//     console.log(movie);
// }

// Array of Object
// Exam-1
// let movie1 = {
//     title: 'The K2',
//     year: 2018,
//     rate: 8.6,
//     character: ['VanLiem', 'HoangAnh', 'TuanKhang'],
// };
// let movie2 = {
//     title: 'Love yourself',
//     year: 2010,
//     rate: 8.3,
// };
//let movieArr = [];
//movieArr.push(movie1);
// movieArr.push(movie2);
//console.log(movieArr);
// // Exam-2
// console.log(movieArr[0]); // print the first movie from movieArr list
// // Exam-3
// console.log(movieArr[1].title); // print is the title the last movie from movieArr list
// Exam-4 Use loop print all of the movie in the moiveArr list
// for( let i = 0 ; i < movieArr.length; i++){
//     console.log(movieArr[i]);
// }
// Exam-5
// for(let i = 0; i < movieArr.length; i++){
//     console.log("---------------------------");
//     console.log(movieArr[i].title);
//     console.log(movieArr[i].year);
//     console.log(movieArr[i].rate);
// }
// Exam-6
// console.log(movieArr[1].rate);
// movieArr[1].rate++;
// console.log(movieArr[1].rate);

// Object containning Array
// Exam-1
// let movie1 = {
//     title: 'The K2',
//     year: 2018,
//     rate: 8.6,
//     character: ['VanLiem', 'HoangAnh', 'TuanKhang'],
// };
// let movieArr = [];
// movieArr.push(movie1);
// console.log(movieArr);
// console.log(`title: ${movie1.title}`);
// console.log(`year: ${movie1.year}`);
// console.log(`rate: ${movie1.rate}`);
// let casts = 'Eren Armin Mikasa';
// movieArr.push(casts);
// console.log(`casts: ${casts}`);

// Exam-2
// let movie1 = {
//     title: 'Love you',
//     year: 2010,
//     rate: 8.1,
//     character: ['vanliem', 'hoanganh'],
//     casts: 'Eren Armin Mikasa',
// };
// let movie2 = {
//     title: 'Train to Busan',
//     year: 2018,
//     rate: 8.7,
//     character: ['Ma Dong Seok', 'SonTung'],
//     casts: 'Holden Bill',
// };
// let movie3 = {
//     title: 'Y thien do long ky',
//     year: 2016,
//     rate: 8.3,
//     character: ['Truong Vo Ky', 'Trieu Man'],
//     casts: 'Ted',
// };
// let movieArr = [];
// movieArr.push(movie1);
// movieArr.push(movie2);
// movieArr.push(movie3);
// console.log(movieArr);
//     console.log("---------------------------");
//     console.log(`title: ${movie1.title}`);
//     console.log(`year: ${movie1.year}`);
//     console.log(`rate: ${movie1.rate}`);
//     console.log(`casts: ${movie1.casts}`);
//     console.log("---------------------------");
//     console.log(`title: ${movie2.title}`);
//     console.log(`year: ${movie2.year}`);
//     console.log(`rate: ${movie2.rate}`);
//     console.log(`casts: ${movie2.casts}`);
//     console.log("---------------------------");
//     console.log(`title: ${movie3.title}`);
//     console.log(`year: ${movie3.year}`);
//     console.log(`rate: ${movie3.rate}`);
//     console.log(`casts: ${movie3.casts}`);

// Option Object
//Exam
let movies = {
    total_results: 3,
    results: [
        {
            popularity: 512.119,
            vote_count: 460,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            id: 475557,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
            original_language: "en",
            original_title: "Joker",
            genres: [
                80,
                18,
                53
            ],
            title: "Joker",
            vote_average: 8.8,
            overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            release_date: "2019-10-04"
        },
        {
            popularity: 241.402,
            vote_count: 598,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
            id: 429203,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
            original_language: "en",
            original_title: "The Old Man & the Gun",
            genres: [
                35,
                80,
                18
            ],
            title: "The Old Man & the Gun",
            vote_average: 6.3,
            overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
            release_date: "2018-09-28"
        },
        {
            popularity: 233.735,
            vote_count: 4139,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
            id: 429617,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
            original_language: "en",
            original_title: "Spider-Man: Far from Home",
            genres: [
                28,
                12,
                878
            ],
            title: "Spider-Man: Far from Home",
            vote_average: 7.6,
            overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
            release_date: "2019-07-02"
        },
        {
            popularity: 158.333,
            vote_count: 323,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
            id: 522938,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
            original_language: "en",
            original_title: "Rambo: Last Blood",
            genres: [
                28,
                53
            ],
            title: "Rambo: Last Blood",
            vote_average: 6.1,
            overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
            release_date: "2019-09-20"
        },
    ]
}
console.log("----- Exam-1 -----------");
console.log("Print or log the movie count in there");
console.log(movies.results.length);
console.log("----- Exam-2 -------");
console.log("Print or log out the data of the first movie");
console.log(movies.results[0]);
console.log("------ Exam-3 ---------------");
console.log("Print or log out the title, vote_average and the genres of the first movie");
console.log(movies.results[0].title);
console.log(movies.results[0].vote_average);
console.log(movies.results[0].genres);
console.log("------- Exam-4 --------------");
console.log("Print or log out all the title, vote_average and genres of ALL movies");
for (let index = 0; index < movies.results.length; index++) {
    console.log(movies.results[index].title);
    console.log(movies.results[index].vote_average);
    console.log(movies.results[index].genres);
}
console.log("------ Exam-5 -------------");
console.log("asking user which genre they like, then print out all of the movie in movies list with that genre");
let genre = Number(prompt("Which genre you like"));
for (let index = 0; index < movies.results.length; index++) {
    for (let i = 0; i < movies.results[index].genres.length; i++) {
        if (genre == movies.results[index].genres[i]) {
            console.log(movies.results[index]);
            break;
        }
    }

}
console.log("-------- Exam-6 -----------");
console.log("asking user the minimum rate they want and then print out ALL of the movie above that rate");
let m_rate = Number(prompt("what minimum rate you want"));
for (let index = 0; index < movies.results.length; index++) {
    if (genre >= movies.results[index].vote_average) {
        console.log(movies.results[index]);
        break;

    }

}