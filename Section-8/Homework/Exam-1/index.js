var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var number = document.getElementById("counter");
var count = 0;
increase.addEventListener('click', function () {
    count +=1;
    number.innerHTML = count;
});
decrease.addEventListener('click', function (){
    count -=1;
    number.innerHTML = count;
})

