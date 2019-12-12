//This file requires access to the Letter.js file
let Letter = require("./Letter.js");

//Our word constructor
let Word = function(word) {

    //Each Word constructor creates an array of Letter objects for each letter in the word.
    this.lettersArr = [];

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === " ") {
            this.lettersArr.push(" ");
        } else {
            this.lettersArr.push(new Letter(word.charAt(i)));
        };
    };

    //Method that utilizes the displayLetter() method in each Letter object in the Word object and returns
    //what the user will see in the game based on which letters are guessed correctly in the hidden word.
    this.createString = function() {
        let wordString = "";

        this.lettersArr.forEach(function(element) {
            if (element === " ") {
                wordString += "  ";
            } else {
                wordString += element.displayLetter();
            }
        });
        return wordString;
    }


    //When a letter is guessed, the Word object checks each Letter object in its array and changes the guessed value to true
    //if the letter is correct.
    this.checkGuessWord = function(letterGuess) {
        this.lettersArr.forEach(function(element) {

            if (element.letter !== undefined) {
                element.checkGuess(letterGuess);
            }
        });
    };
};

//Will be exporting the Word object to index.js
module.exports = Word;