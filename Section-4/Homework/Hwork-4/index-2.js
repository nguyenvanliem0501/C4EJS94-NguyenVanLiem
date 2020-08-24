let dictionary = {
    debug:'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it\
     (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process\
        to define how your products looks and feels',
};
while(true){
    alert('Hi there, this is dev directionary');
    let x = prompt("Enter a keyword");
    if(x in dictionary){
        alert(`${x} \n ${dictionary[x]}`);
    } else{
        let value = prompt(`We coould not find your word : ${x}, leave your explanaion`);
        dictionary[x] = value;
        alert('Done');

    }
}