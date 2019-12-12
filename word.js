var Letter = require("./letter")

var Word = function(randomword) {
    this.word = randomword
    this.wordArray = []

    this.build = function() {
        //loop 
        for (var i = 0; i < this.word.length; i++) {
            this.wordArray.push(new Letter(this.word[i]))
        }
    }
    this.formString = function() {
        let str = ""
        for (i = 0; i < this.wordArray.length; i++) {
            str = str + this.wordArray[i].show(this.wordArray[i].value)
        }
        //  console.log("str", str);
        return str;
    }
    this.verify = function(input) {
        var check = false;
        for (var i = 0; i < this.wordArray.length; i++) {
            if (this.wordArray[i].checker(input)) {
                check = true;
            };
            //console.log(check);
        }

        return check;
    }
}

module.exports = Word;
// this.wordArray = randomword.split("").map(letter => {return new Letter(letterhehe