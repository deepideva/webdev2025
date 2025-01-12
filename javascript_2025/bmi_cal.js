// Simple
// BMI Calculator - BMI = Weight(kg)/ height2 ( m2)

//Method-1 ( Worked fine)
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

/*function bmiCalculator(weight, height){
    var bmi= weight / (height * height);
    bmi = Math.round(bmi);
    alert(bmi);
return bmi;
}
bmiCalculator(65, 1.8); 


//var bmi = bmiCalculator(65, 1.8); 

If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number. */

//Method-2
/*function bmiCalculator(weight, height){
    var bmi= weight / (height * height);
   // bmi = Math.round(bmi);
    alert(Math.round(bmi));
return Math.round(bmi);
}
bmiCalculator(65, 1.8); 
console.log(bmi);
*/


// Used return in the Challenge Window - Worked

/*function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.round(bmi);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
        
}*/



// Using If Else
/*
var weight = parseFloat(prompt("Please enter your Weight in KGs"));
var height = parseFloat(prompt("Please enter your Height in Metres"));

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.round(bmi);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi >= 25.5 && bmi <= 29.9) {
        return "Your BMI is " + bmi + ", so you are Overweight. Start Walking daily !";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        return "Your BMI is " + bmi + ", so you are Obese. Need to take More care";
    } else {
        return "Your BMI is " + bmi + ", so you are Extremely Obese.";
    }
}

var result = bmiCalculator(weight, height);
console.log(result); // Display the result in the console
alert(result); // Optionally show the result in an alert box


    




*/