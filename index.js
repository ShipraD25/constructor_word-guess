var Word = require("./word");
var inquirer = require("inquirer");

var wordArray = ["Canada", "India", "Australia", "China", "England", "Italy", "Spain"];
var guessLeft = 9;
var wrongLetters;

//var wins;
//var losses;

var word = new Word(wordArray[0])
console.log(word)
word.build();

console.log(word)

function askLetter() {
    inquirer
        .prompt([{
            type: "input",
            name: "guessLetter",
            message: "Guess a letter"
        }])
        .then(function(res) {

            var check = word.verify(res.guessLetter);
            var wordShow = word.formString();
            console.log(wordShow);
            console.log(check);
            if (!check) {
                guessLeft--;

            }
            if (guessLeft === 0) {
                console.log("****game Over****");
                process.exit()
            }
            if (wordShow.includes("_")) {
                console.log(wordShow)
                askLetter()
            } else {
                console.log("You Won");
                process.exit()
            }

            // reduce the left 
            // win
            //losses
        })
}


askLetter()