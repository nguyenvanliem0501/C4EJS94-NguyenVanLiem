var num = document.getElementById("num");
var number = document.getElementById("number");
var test;
var a;
function countdown(){
    test -=1;
    if(test > 0){
        document.getElementById('number').innerHTML = test;
    } else{
        document.getElementById('number').innerHTML = "Time up!!!";
        clearInterval(a);
    }
}
function start(){
    test = num.Value;
    a = setInterval(countdown, 1000);
}
function stop(){
    clearInterval(a);
    document.getElementById('number').innerHTML = "Stop!!!";
}
