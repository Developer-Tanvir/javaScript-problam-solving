// Write a JavaScript Function to calculate the multiplication and division of two numbers.


/////////////////////// my ///////////////////////


// function newFunction(m,n){
//     multiplication = m*n;
//     console.log(` multiplication two number to = ${multiplication}`);
//     division = m/n;
//     console.log(` multiplication two number to = ${division}`);

// }
// newFunction(5,5);

///////////////////////////////////////////////////////////////////

// Write a JavaScript program to convert temperatures from Celsius to Fahrenheit or Vice Versa (Fahrenheit to Celsius).



/////////////////////// my ///////////////////////

// function myCelcius(f){
//     celsius= (5*(f-32))/9;
//     console.log("celsius valu is "+ celsius);
// }
// myCelcius(50);

// function myFarenheit(n){
//     farenheit=(9*n+(32*5))/5;
//     console.log("farenheit valu is "+ farenheit);
// }
// myFarenheit(60);




// Write a JavaScript function to check from two given integers, whether one is positive and another one is negative. 



/////////////////////// my ///////////////////////

// let amit = 500;
// let tanvir = 800;
// if(amit > 0 && tanvir < 0){

//     console.log("condition is true")
// }else{
//     console.log("condition is false")
// }


// Write a JavaScript function to check whether the number is positive or negative.


/////////////////////// my ///////////////////////

// let myNumber = 509;

// if(myNumber % 2 == 0){
//     console.log("this number is positive number")
// }else{
//     console.log("this number is negative number")

// }


// Write a JavaScript program to remove a character at the specified position of a given string and return a new string



/////////////////////// my ///////////////////////


// let language = "my first programming language is python";
// let preasent = language.replace("python","javaScript");
// console.log(preasent);

// Write a JavaScript function to reverse a given string.


/////////////////////// my ///////////////////////
// let reverseWord = "creative fornt end development";
// function reverse(){

//     let mySplit = reverseWord.split("");
//     let myReverse = mySplit.reverse();
//     let myJoin = myReverse.join("")
//     console.log(myJoin);
// }
// reverse()


// Create Three objects with at least 4 properties and 2 methods in them. 

// const car = {
//     Model : "BMw",
//    Wait : "1250kg",
//    Engin : "oilCollear",
//    Collor : "black",
//    Company : "hero company",
//    carDetelse: function(){
//        console.log("this car model "+this.Model+" and this car wati is "+ this.Wait +" or this cour manufectruing by " +this.Company)
//    }
// };
// car.carDetelse();

// const developerTanvir = {
//     age : "21",
//     color : "black",
//     language : "javaScript",
//     experince : "4 year",
//     homeTwon : "bangladesh Bogura",
//     isAddmiton: function(){
//         console.log(this.language + "he is addmitade to the course " + this.age)
//     }

// }
// console.log(developerTanvir["language"]);

// developerTanvir.isAddmiton();


// const student = {
//     firstName: "Tanvir",
//     lastName: "hasan",
//     age: 21,
//     marred: true,
//     addCourse: function(){
//         console.log(this.firstName + "is a addmitade in this course and she is a " +this.age+" years old & and this function "+this.marred)
//     }

// }
// student.addCourse();


// swap the values between two variables

// var x=2;
// var y=3;

// function swap(){
//     var temp=x;
//     x=y;
//     y=temp;
//     console.log(the value of x = ${x} and y = ${y})
// }
// swap();

/////////////////////// my ///////////////////////

// var a = 500;
// var b = 700;

// [a,b] = [b,a];
// console.log(`valu of a = ${a} and valu of b = ${b}`);


// Find the largest of 3 numbers

/////////////////////// my ///////////////////////
// let x=20, y=32, z=40;

// if (x>y){
//     console.log("x is the largest")
// }
// else if(y>z){
//     console.log("y is the largest")
// }
// else{
//     console.log("z is the largest")
// }

// sum of all Numbers in array 

var numbers =[2,2,3,4,45,5]
var count = 0;
for(i=0;i<numbers.length;i++){
    // console.log(numbers[i]);
    count=count+numbers[i];
}

console.log(count);



// find the largest element in an array

// var numbers =[2,2,113,4,45,5];
// var largest=numbers[0];

// for(i=0;i<numbers.length;i++){
//     if(numbers[i]>largest){
//         largest=numbers[i];
//     }

// }
// console.log(largest);


// remove duplicate item from an array

// var numbers =[2,2,113,4,45,5];

// console.log(numbers);