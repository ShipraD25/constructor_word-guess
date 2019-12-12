//This file requires access to the Letter.js file
var Letter = require("./Letter.js");

//Our word constructor
var Word = function(word) {


    this.lettersArr = [];

    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === " ") {
            this.lettersArr.push(" ");
        } else {
            this.lettersArr.push(new Letter(word.charAt(i)));
        };
    };

    //Method that utilizes the displayLetter() method in each Letter object in the Word object and returns
    //what the user will see in the game based on which letters are guessed correctly in the hidden word.
    this.createString = function() {
        var wordString = "";

        this.lettersArr.forEach(function(element) {
            if (element === " ") {
                wordString += "  ";
            } else {
                wordString += element.displayLetter();
            }
        });
        return wordString;
    }



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