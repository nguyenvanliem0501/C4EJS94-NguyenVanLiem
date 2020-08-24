let process = [
    {
        subject: 'HTML',
        complete: false,
    },
    {
        subject: 'CSS',
        complete: false,
    },
    {
        subject: 'Basic of Javascrip',
        complete: false,
    },
    {
        subject: 'Node Packeage Manager',
        complete: false,
    },
    {
        subject: 'Git',
        complete: false,
    }
];
if(a == 'complete'){
    let x = Number(prompt("Enter position"));
    process[x-1].complete = true;
    for (let i = 0; i < process.length; i++) {
        console.log(`${i +1}. ${process[i].subject}`);
        console.log(`  Complete: ${process[i].complete}`);
    }
}