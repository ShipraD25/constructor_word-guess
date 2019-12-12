let Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;

    //method checks the 'guessed' property and returns either an _ or letter based on the 'guessed' value
    this.displayLetter = function() {
        if (this.guessed) {
            return this.letter + " ";
        } else {
            return "_ ";
        };
    };

    //if the guessed letter matches the 'letter' value, then we change the 'guessed' value of the Letter object to 'true'.
    this.checkGuess = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }

    };
};

//Exporting the constructor to the Word.js file.
module.exports = Letter;