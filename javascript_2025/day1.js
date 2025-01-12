/*alert("Hello");
window.alert("World!");
prompt("What is your name ?")
var myname="Ganesh";
var kidname="DeepiDeva"
myname="Ganeshbabu"
alert(myname);
var urname = prompt("What is your name")
alert("Welcome" + urname + " My name is " + myname);
var a = "3";
var b ="8";
alert("Value of a is  : " + a + " Value of b is : "+ b);
var c = a;
var a = b;
var b = c;
alert("Value of a is  : " + a + " Value of b is : "+ b);

var message = prompt("What is ur name ?");
alert("Hi " + message + " Happy New Year"); 

//Challenge to find length 

var msg = prompt("What is youer name");
var len = msg.length;
alert("Hi "+ msg + ", Length of your name is " + len + " and You have " + (15-len) + " Characters left to type"); */

// var name ="Ganeshbabu"
// name.slice(0,6)

// Use Slice option and cut short your message
/*var msg = prompt("Type your Message (Only 10 Chars allowed) ");
msgcount = msg.slice(0,10);
alert("Your Message is " + msgcount );*/

// Below is doing same above in single line without declaring Variable
//alert(prompt("Compose your message: ").slice(0,10));


//Use To case ...
/*var name = prompt("What is your name");
uname = name.toUpperCase();
lname = name.toLowerCase();
lenname = name.length;
alert(" Hi "+ name+ " Welcome, Your Uppper case name is "+uname+ "And, Your Lowercase name is "+ lname+ "And length of your name is "+ lenname);*/

//Try challenge with using To uppercase, lower case , Length and Concat --- In section 86 - Angela's Lesson

// ******************************Day 2 *************************************************************//
//Try challenge with using To uppercase, lower case , Length and Concat --- In section 86 - Angela's Lesson
// Here , Challenge is , If User enter their name as ganesh , You need to display first Letter G alone in Caps
/*var name = prompt("What is your name ? ");
name1stletter=name.slice(0,1);
name1stletter=name1stletter.toUpperCase();
restname=name.slice(1, (name.length));
restname=restname.toLowerCase();
alert("Welcome ! " +name1stletter+ restname);*/
// Challenge successfully done

//****************** Now Arithmetic and Modulo********************* //
/*var dogage = prompt("What is your Dog Age ?");
var humanage=((dogage-2)*4)+21;
alert("Thanks for input, So the Human age of Dog is : "+humanage);*/

// Increment and Decrement Expressions

/*var x=12;
var y=3;
//x++;
//x+=y;
x /= 3;
alert(x);*/

/*var x = 3;
var y = x++;
y += 1;
alert(y); */

// Other examples
/*var x=5;
var y=x++
console.log("X:",x);  // x = 6 (incremented after assignment)
console.log("Y:",y);  // y = 5 (value of x before increment)
// Answer is X: 6 , Y: 5 --> because x=5 , but when we use y=x++ ,, X value (3) got assigned to Y and then Increment value (1) to x
*/

// Creating and calling Functions
/*function getmilk()
{
    console.log("LeaveHouse");
    console.log("moveright");
    console.log("moverleft");
    console.log("enterhome");
    console.log("Script Executed");
    
}

getmilk();
 */

//###################################### Section 2##############################################
/* 
// Parameter pass to function
/*function getMilk(bottles) {   
console.log("leaveHouse");
console.log("moveRight");
console.log("moveRight");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveRight");
console.log("moveRight");
console.log("Buy " + bottles + " Bottles of Milk")
console.log("moveLeft");
console.log("moveLeft");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveLeft");
console.log("moveLeft");
console.log("enterHouse");
console.log("Script Executed");
}
getMilk(2); */

//Now try same with Giving Money to Robot and ask Robot to get equivalent bottles and get remaining money as well
// Below challenge worked very well
/*function getMilk(amount) {   
console.log("moveUp");
console.log("moveRight");
console.log("moveRight");
console.log("Buy for " + amount + " Dollars");
var tobuy= (amount / 1.5);
var remamount= (amount % 1.5);
    tobuy =Math.round(tobuy);
    console.log("Please give me " +tobuy+ " Bottles of Milk and my remaining balance " + remamount);
console.log("moveLeft");
console.log("moveLeft");
console.log("moveDown");
console.log("moveLeft");
console.log("enterHouse");
console.log("Script Executed");
}
getMilk(5);
*/


//challenge gets input from User ** Worked Well
/*var x = prompt("Enter your age ")
function userage(age) {
    
************Don't change the code above************   
    
    //Write your code here.
        var totalage= 90;
        var remainingyears= (totalage-age); // So 34 Years exists
        var days=(remainingyears*365); // 12410 Days exists
        var weeks=(remainingyears*52); // so 1768 Weeks exists
        var months=(remainingyears*12); // So 408 Months left
        console.log("Welcome, You have entered "+x+" as age")
        console.log("You have "+days+ " days, " + weeks+ " weeks, and "+months+ " months left.")
        
    }
    
    userage(x);
    */


// Challenge gets input from User --- With return function, Worked well
/*var x = prompt("Enter your age ");

function userage(age) {
  /************Don't change the code above************/

  // Write your code here
 /* var totalage = 90;
  var remainingyears = totalage - age; // Remaining years
  var days = remainingyears * 365; // Remaining days
  var weeks = remainingyears * 52; // Remaining weeks
  var months = remainingyears * 12; // Remaining months

  // Return the result as a string
  return (
    "Welcome, You have entered " +
    age +
    " as age.\n" +
    "You have " +
    days +
    " days, " +
    weeks +
    " weeks, and " +
    months +
    " months left."
  );
}

// Call the function and store the result
userage(x);
var result = userage(x);

// Display the result in the console
console.log(result);
*/

//----------------------------------Simple return function********************************************
/*function calculation(a,b){
    sum = a+b;
    return sum;
}
//calculation(4,6);
var result=calculation(4,6);
console.log("Final Result is : "+result);*/


// Simple calculation using return function - Worked well
/*var a = prompt("Enter 1st number")
var b = prompt("Enter 2nd number")
a = Number(a);
b = Number(b);
function calculation(a,b){
    sum = a+b;
    return sum;
}
var result=calculation(a,b);
console.log("Final Result is : "+result); */


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




/*
// Love Calculator Game

/*var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log((n));*/

/*var p1 = prompt("Enter Your Name");
var p2 = prompt("Enter second person name to check your Love");
var p1len = p1.length;
var p2len = p2.length;
var total = p1len + p2len;*/
// var n = Math.random() * 100;
// n = Math.floor(n);
// console.log("Your Love score is : "+n+ " % Out of 100")
// console.log( " Just for fun, No calculations behind !! Dont Worry !!!")


// Love Calculator Game Advanced levels - Use if else
/*var p1 = prompt("Enter Your Name");
var p2 = prompt("Enter second person name to check your Love");
var n = Math.random() * 100;
n = Math.floor(n + 1);
if (n > 70) {
    alert("Your Love score is : "+n+ " % Out of 100 , You guys are Best pair in World !");
    alert(( " Just for fun, No calculations behind !! Dont Worry !!!"));
} else {
    alert("Your Love score is : "+n+ " % Out of 100 !")
    alert(( " Just for fun, No calculations behind !! Dont Worry !!!"));
}
*/