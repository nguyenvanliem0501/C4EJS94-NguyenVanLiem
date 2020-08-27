let questionArr = [
    {
        question : 'Which fictional detective lived at 221b Baker Street?',
        choice: ['1. Watson ', '2. Sam Spade', '3. Scibidu', '4. Sherlock Holmes'],
    },
    {
        question : 'What sweet food made by bees using nectar from flowers?',
        choice: ['1. Bread', '2. Honey', '3. Sugar', '4. Potent'],
    },
];

let index = Math.floor(Math.random() * questionArr.length);
let answer = prompt(`${questionArr[index].question}\n ${questionArr[index].choice[0]}\n ${questionArr[index].choice[1]} 
${questionArr[index].choice[2]}\n ${questionArr[index].choice[3]}`);

