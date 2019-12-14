# constructor_word-guess

Word Guess is a Node Game Application based on commands. 
In this version we are trying to guess different countries in the world.

### App-Demo
![app-demo](https://media.giphy.com/media/mGUz5tUcwYOiLPVhrn/giphy.gif)

## Getting Started
#### These instructions will get you a copy of the project up and running on your local machine.
1. Clone the repository
2. Run nmp install 
#### Go to npmjs if you want to know more about:
1. **inquirer**: https://www.npmjs.com/package/inquirer
## Built With
- Nodejs
- Javascript
- Npmjs packages: **inquirer** to handle the prompt with the users
## How this work?
 The integration of constructors and objects helped to build more robust solution than previous homework projctes. The project works with two constructors:
- Letter.js: Contains the constructor, Letter. This constructor is  able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. The constructor includes:
    - A string value to store the underlying character for the letter
    - A boolean value that stores whether that letter has been guessed yet
    - A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    - A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly.
    ### Code Snippet

```
this.displayLetter = function() {
        if (this.guessed) {
            return this.letter + " ";
        } else {
            return "_ ";
        };
    };
```
- Word.js: Contains the constructor, Word that depends on the Letter constructor. This is used to create an object representing the words (countries name in this case) the user is attempting to guess. The constructor includes:
    - An array of new Letter objects representing the letters of the underlying word
    - A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    - A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
### Code Snippet

```
var Word = function(word) {


    this.lettersArr = [];

    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === " ") {
            this.lettersArr.push(" ");
        } else {
            this.lettersArr.push(new Letter(word.charAt(i)));
        };
    };
```
        

- index.js: The file contains the logic for the course of the game, which depends on Word.js and:
    - Randomly selects a word and uses the Word constructor to store it
    - Prompts the user for each guess and keeps track of the user's remaining guesses.

