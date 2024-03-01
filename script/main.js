// // let num1 = prompt('num1');
// // let num2 = prompt('num2');
// // let firstNumber = parseInt((num1));
// // let secondNumber = parseInt((num2));

// // let result = firstNumber + secondNumber;
// // alert(result);


// // let water = "Water is here";
// // let juice = "Juice is here";

// // [water, juice] = [juice, water];

// // console.log(water);
// // console.log(juice);

// //write a js program that can extract the first 5 characters in any given sentence and display that to the console

// /*
// //step 1
// //create a variable and assign a value to it
// let sentence = prompt("Enter sentence");

// //step 2
// //create a container(variable)
// let last5 = sentence.slice(-4);

// //step 3
// //display the Last 5 characters
// alert("Last 5 characters " + last5);

// //write a js program that formats a sentence 

// //get your input
// */

// //get the input
// // let word = prompt('Enter your sentence:');

// //convert to lowercase
// // get the first letter
// // convert the first letter to upper letter case
// // join converted first letter with the rest of the sentence
// // display the sentence

// //I cook rice
// //I work on my assignment
// //I plan for the next day
// //I clean the house

// //write a javascript program that capitalizes every first word in a sentence

// //Get Input by creating a variable
// // let sentence = prompt('Enter your sentence');


// // let capitalizedWord = sentence[0].toUpperCase();

// // alert(capitalizedWord)

// //function
// // function syntax, Input, output and calling a function

// // function userInput() {
// //     let username = prompt("Enter Username");
// //     console.log("Hello " + username + ", welcome to Gomycode");

// //     let city = prompt("Enter City Name");
// //     console.log("I am from " + city);
// // }

// // userInput();

// //Write a function that adds two numbers together, display the result in the console

// //addition of two numbers
// // function addTwoNumbers (num1, num2) {
// //     let result = num1 + num2;
// //     console.log(result);
// // }

// // addTwoNumbers(34,78);

// //subtraction function
// // function subtractTwoNumbers (num1, num2) {
// //     let subtraction = num1 - num2;
// //     console.log("The subtraction of "+ num1 + " " + "-" + " " + num2 + " " + "= " + subtraction);
// // }

// // subtractTwoNumbers(45,89);

// //write a js function that counts the number of characters in a given string and that displays the result to the console

// //create your function
// function numCharacters() {
//     let word = prompt("Enter word");
//     let counted = word.length;

//     console.log(counted);
// }

// // numCharacters();

// function numCharacters(word) {
//     let counted = word.length;

//     console.log(counted);
// }

// numCharacters("solomonhhh");
// //display your parameters

// //get your inputs


/*create a function

function areYouCool() {
    let input = confirm("Are you okay Solomon?");
    console.log(input);

    let num1 = 23;
    if (input == true){
        console.log(num1 + 4);
    } else {
        console.log("You are gradually becoming a programmer");
    }
}

areYouCool();

*/


/*
//create your function
function registerUser(){
    //get your user input by using the prompt()
    let userInput = prompt("Do you want to register \n Yes or No");

    //display user input
    console.log(userInput);

    //convert your userInput to boolean
    if (userInput == 'yes'){
        console.log(Boolean('true'));
    } else {
        console.log(Boolean(''));
    }
}

//display your result
registerUser();
*/

function powerButton() {
    document.getElementById('click').style.backgroundColor = 'black';


}