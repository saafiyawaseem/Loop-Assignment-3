Q: 2; //GUESSING GAME (Uing WHILE LOOP)
1.; //SET a maximum value:Creat a variable to store the maximum value for the number
///guessing game.
2.; //Generate a random number: Use Math . random() and math . floar() to generate a
//random number between 1 and the maximum value.Log this value to the console for development purposes.
3.; //TRrack the guess status: create a variable to track whether the user's guess is correct. Set
//it to false initially.  
4.; //Simulate user guesses:Use an array to store a series of predefined guesses.
5.; //Iterate  over guesses:Use a while loop to Iterateover the predefined guessesuntil the correct guess is made.
var maxNum = 9;
// generate a random number;
var randomNumber = Math.floor(Math.random() * maxNum) + 1;
console.log(randomNumber);
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var num = 0;
while (num < array.length) {
    var guess = array[num];
    if (guess === randomNumber) {
        console.log("Wow ! u guessed correct number");
    }
    else if (guess < randomNumber) {
        console.log("u are wrong");
    }
    else {
        console.log("sorry! try again");
    }
    num++;
}
Q: 1; //CREATING LESSON PLANE(USING FOR LOOP)
//OBJECTIVE:Create a list of lesson objects in typscript with alternating statusses to indicte
//whethere each lesson is running this year.
1.; //CREATE A BLANK ARRAY:
2.; //USE A LOOP TO CREATE LESSONS:
3.; //ADD THE LESSON TO THE ARRAY:
4.; //PRINT THE RESULT:
//HINTS:
//*use to ternary operator to set the status property based on whethere the lesson number is
//odd or even.
//*the module operater% can help determine if a number is even or odd.
var myWork = [];
for (var i = 1; i < 10; i++) {
    var lesson1 = {
        name: "function".concat(i),
        status: i % 2 === 1 ? true : false
    };
    if (i % 2 === 1) {
        console.log("the lesson is odd");
    }
    else {
        console.log("the lesson is even");
    }
    myWork.push(lesson1);
    console.log(myWork);
}
;
Q: 3; //Counter incereminter (using do while loop);
//Objective: Create a program that increment a counter by a specified step value using a 
//do...while loop and prints the counter value to the console until it
//reaches or exceeds 100.
//STEP TO FOLLOW:
1.; //Set the starting counter to 0;Create a variable a counter initialized it to 0:
2.; //Create a variable ,step , to increased your counter by:define a variable step to hold
//the value by which the counter willbe incremented.
3.; //Add a do...while loop:In the loop ,print the counter to the console and increment it by
//the step amount each iteration.
4.; //Countinue to loop until the counter equal to more than 100:the loop should runas 
//long as the counter is less than 100;
var counter = 0;
var step = 10;
do {
    console.log(counter);
    counter += step;
} while (counter <= 100);
Q: 5; // EXPLORING ARRAY WITH LOOP:(using loop)
//OBJECTIVE:prectice working with Array in typescript with using for loop
//and for of loop to iterate through the element of array.
//INSTRUCTION:
//Create an empty Array;
//* defined an empty array called  myArray;
//RUN loop 10 time adding a new incrementing value to the array;
//use a for loop to iterate 10 Time.
var myArray = [];
for (var p = 0; p <= 10; p++) {
    myArray.push(p);
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log(value);
}
Q: 4; //EXPLORING OBJECTS WITH FOR IN LOOPS:
//Objective:prectice working with objects in typescript to iterating over their properties
//using le a for in loop,
//INSTRUCTION:
//Create a simple object with three items:
//DEFINE an object called myObject with three properties,item1, item2 and item3
//each correspending string value .
//use for in loop to get propertie's names and values from objects.
1.; //iterate throug the properties from myObject using with for in loop();
2.; //inside the loop print each propertie's name and it's correspending value
//to the conso.
var myObject = {
    item1: "spoon",
    item2: "glass",
    item3: "cup"
};
for (var key in myObject) {
    console.log(key + ':' + myObject[key]);
}
