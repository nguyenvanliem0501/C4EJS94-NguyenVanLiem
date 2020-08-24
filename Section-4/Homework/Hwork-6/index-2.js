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
let a = prompt("Enter your command(New, Delete, Update, Complete");
if(a == 'new'){
    let newTask = prompt("Enter new task:");
    let newProcess = {
        subject: newTask,
        complete: false,
};
process.push(newProcess);
for (let i = 0; i < process.length; i++) {
    console.log(`${i +1}. ${process[i].subject}`);
    console.log(`  Complete: ${process[i].complete}`);
}
}
