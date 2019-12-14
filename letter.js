var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;
    if (this.letter === ' ') {
        this.guessed = true;
    }

    this.displayLetter = function() {
        if (this.guessed) {
            if (this.letter === ' ') {
                return this.letter;
            }
            return this.letter + " ";
        }
        return "_ ";
    };

    //if the guessed letter matches the 'letter' value, then we change the 'guessed' value of the Letter object to 'true'.
    this.checkGuess = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
        return this.guessed;
    };
};

//Exporting the constructor to the Word.js file.
module.exports = Letter;