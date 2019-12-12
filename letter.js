var Letter = function(value) {
    this.value = value;
    this.guessed = false;
    this.show = function() {
        if (this.guessed) {
            return this.value;
        } else {
            return "_";
        }
    }

    this.checker = function(input) {

        if (input === this.value) {
            this.guessed = "true";
            return true;
        }
    }

}

module.exports = Letter;