//This file depends on the Word.js file which gives us the Word constructor
var Word = require("./Word.js");

//Going to use the inquirer.js NPM to get the user's input.
var inquirer = require("inquirer");

// Hashset for checking if user has input a char.
var HashSet = require('hashset');

//Our list of words that will be randomly picked.
var wordArray = ["INDIA", "USA", "JAPAN", "CANADA", "ITALY", "EUROPE", "IRAN", "HEY HEY WHOO"]

//We only want letters as input. No special characters, empty spaces, or numbers.
var letters = /[a-zA-Z]/;


//The number of incorrect tries the player gets to have. We will initialize this value in the playGame() function so it can be set
//to 10 when a new game starts.
var numGuesses;
var userInput = new HashSet()

//This function creates a new game with a new word.
function playGame() {

    var newWord = wordArray[Math.floor(Math.random() * wordArray.length)]
        //First we pick our new word randomly from the word array
    var word = new Word(newWord);

    //The user gets 10 incorrect tries before the game is over.
    numGuesses = 10;

    // Clear hashset.
    userInput = new HashSet()

    //Now we execute the game based on the word.
    guessWord(word, newWord);

};

//This function handles everything the game should do to take a word, display it as blanks, have the user guess,
//indicate if the guess is correct. This function will call itself over and over until either the word is guessed
//or the user runs out of incorrect attempts. 
function guessWord(guess, actual) {

    var letterWordArr = [];
    var guessArr = [];

    //Shows the word being guessed, initially as underscores. The underscores will be replaced by letters when they are guessed
    console.log("");
    console.log(guess.displayWord());
    console.log("");

    //Ask for the letter and only letters. We do not want to accept special characters, numbers, or empty spaces.
    inquirer.prompt([{
        name: "guessLetter",
        message: "Pick a letter.",
        validate: function validateLetter(name) {
            if (name.length != 1) {
                return "Please input a letter, english letters have length = 1"
            }
            if (!name.match(letters)) {
                return "Please pick a valid letter [a-zA-Z].";
            }
            if (userInput.contains(name)) {
                return name + " has already been guessed."
            }
            userInput.add(name);
            return true;
        }
    }]).then(function(answer) {

        //Converts input to upper case to make things easier to compare. Then we use the constructor methods from Word.js
        var guessed = guess.checkGuessWord(answer.guessLetter.toUpperCase());
        //console.log("Overall guessed value=" + guessed)

        if (guessed === true) {
            console.log("")
            console.log("CORRECT!!!");
        } else {
            console.log("");
            console.log("Incorrect!");
            numGuesses--;
            console.log(`You have ${numGuesses} tries remaining.`)
        }

        //If the word is not fully guessed and the player still has tries available, then the function asks for another letter
        //by calling itself
        //if (guessArr.indexOf(false) > -1 && numGuesses > 0) {
        if (guessed === false && numGuesses > 0) {
            guessWord(guess, actual);
        }
        //Otherwise, we need to indicate if the user won or lost
        else {
            //Show the correct word whether the user won or lost


            if (numGuesses === 0) {
                console.log("");
                console.log("You lose.");
                console.log(`The word was ${actual}!`);
                console.log("");
            } else {
                console.log("");
                console.log("You did it!");
                console.log(`The word was ${actual}`);
                console.log("");
            };

            inquirer.prompt([{
                type: "confirm",
                name: "playAgain",
                message: "Would you like to play again?",
                default: true
            }]).then(function(answer) {
                //If yes, a new game starts.
                if (answer.playAgain) {
                    playGame();
                }
                //If not, the program stops.
                else {
                    process.exit();
                }
            });
        };
    });
};


playGame();