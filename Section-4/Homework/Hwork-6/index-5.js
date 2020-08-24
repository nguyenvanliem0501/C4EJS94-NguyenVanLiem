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
if(a == 'delete'){
    let x = Number(prompt("Enter position"));
    process.splice(x-1,1);
    for (let i = 0; i < process.length; i++) {
        console.log(`${i +1}. ${process[i].subject}`);
        console.log(`  Complete: ${process[i].complete}`);
    }
}