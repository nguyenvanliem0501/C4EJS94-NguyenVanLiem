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
    {
        question : 'Which fictional detective lived at 221b Baker Street?',
        choice: ['1. Watson ', '2. Sam Spade', '3. Scibidu', '4. Sherlock Holmes'],
        rightchoice: 4,
    },
    {
        question : 'What sweet food made by bees using nectar from flowers?',
        choice: ['1. Bread', '2. Honey', '3. Sugar', '4. Potent'],
        rightchoice: 2,
    },
];
let check = 'fasle';
while(true){
    if(quizzes.length == 0){
        break;
    }   
    let index = Math.floor(Math.random() * quizzes.length);
    let answer = prompt(`${quizzes[index].question}\n ${quizzes[index].choice[0]}\n ${quizzes[index].choice[1]} 
    ${quizzes[index].choice[2]}\n ${quizzes[index].choice[3]}`);
   
        if(answer == null){
            check = true;
            break; 
        }
        quizzes.splice(index, 1);
}
alert("We are out of question");


