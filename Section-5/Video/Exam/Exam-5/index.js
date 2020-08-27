let quizzes = [
    {
        question: 'How many legs do an optopus has?',
        choice: ['1. 4 legs', '2. no legs', '3. 8 legs', '4. 2 legs'],
        rightchoice: 3,

    },
    {
        question: 'Which country is home to the kangaroo?',
        choice: ['1. Australia', '2. Autria', '3. New Zealand', '4. US'],
        rightchoice: 1,
    },
];
for(let i = 0; i < quizzes.length; i++){
    let index = prompt(`${quizzes[i].question}\n ${quizzes[i].choice[0]}\n ${quizzes[i].choice[1]}\n ${quizzes[i].choice[2]}\n ${quizzes[i].choice[3]}`);
        let answer = Number(quizzes[i].rightchoice);
        if(index == answer){
            alert("Bravo!!");
        } else{
            alert("Good luck next time");
        }
       
}