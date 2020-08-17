let w = parseInt(prompt("Your weight in kg?"));
let h = parseInt(prompt("Your height in cm?"));
let BMI = w*10000/(h*h);
if(BMI<16){
    alert("Your BMI is " + BMI.toFixed(1) );
    alert(" You are severely underweight");
} else if(BMI < 18.5){
    alert("Your BMI is " + BMI.toFixed(1));
    alert("You are underweigth");
} else if(BMI < 25){
    alert("Your BMI is " + BMI.toFixed(1));
    alert("You are normal");
} else if(BMI < 30){
    alert("Your BMI is " + BMI.toFixed(1));
    alert("You are overweight");
} else {
    alert("Your BMI is " + BMI.toFixed(1));
    alert("Obese");
}

