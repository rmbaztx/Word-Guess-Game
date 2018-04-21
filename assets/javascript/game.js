//Prepare a list of possible words for the user to guess
var wordListArray = [
  "earth",
  "venus",
  "mars",
  "jupiter",
  "mercury",
  "saturn",
  "pacific",
  "atlantic",
  "mediterranean",
  "everest",
  "kilimanjaro",
  "europe",
  "america",
  "asia",
  "africa"
];

//Initialize vars
var displayWord = [];
var userChoicesSoFar = [];
var displayWordChanged = false;
var newMessage = document.getElementById("alreadyGuessed");

//Select a word from the word list
var randomNumber = Math.floor(Math.random() * wordListArray.length);
console.log("random = " + randomNumber);
var wordToGuess = wordListArray[randomNumber];
console.log("Word to guess = " + wordToGuess);
//This part OK
//First time through, set wordSoFar to all "_"
for (var i = 0; i < wordToGuess.length; i++) {
  displayWord.push("_");
  
}

//I think it might be working, but console output isn't clear
console.log(displayWord.join(" ")); 

//to test
//Try sending displayWord to html to verify
var tempWord = document.getElementById("wordSoFar");
tempWord.innerHTML = displayWord.join(" ");
//cannot set property of a null

// Check if the user has pressed a key.
document.onkeyup = function(event) {

// Determine which key was pressed.
var alreadyGuessed = false;
var userGuess = event.key.toLowerCase();
for (var i = 0; i < userChoicesSoFar.length; i++) {
  if (userGuess == userChoicesSoFar[i]) {
    newMessage.innerHTML = "Already Guessed";
    alreadyGuessed = true;
  }
}
if (!alreadyGuessed) {
  newMessage.innerHTML = "";
  userChoicesSoFar.push(userGuess);
  for (var i = 0;i < wordToGuess.length;i++) {
    console.log("in for loop");
    if (wordToGuess[i] == userGuess) {
      console.log("in if statement");
      displayWord[i] = userGuess;
      displayWordChanged = true;
      //if it did, update display
      //did they win?
    }
  }
  //updateDisplay
  if (displayWordChanged = true) {
    tempWord.innerHTML = displayWord.join(" ");
  }
  //did they win?
  if (displayWord.join("") == wordToGuess) {
    var winMessage = document.getElementById("winMessage");
    winMessage.innerHTML = "You won";
  }
}

console.log(event.key);

//This part OK

//step through wordSoFar to see if userGuess matches any characters
// for (var i = 0;i < wordToGuess.length;i++); {
//   if wordToGuess(i) == userGuess {
//     wordSoFar  
//   }
// }
//Test that array functions
//console.log(wordListArray[2]);
//Pick a word from wordListArray
//Var random-number = options[Math.floor(Math.random()*options.length)];

//On each subsequent pass, check userGuess against each position of the word

//Make sure "it" is ready for key press?  Or, was that just for jQuery?


//display word so far
//document.querySelector("#wordSoFar").innerHTML = "Test from js";
// document.querySelector("#question").innerHTML = "Game Over!";
// document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
// function updateScore() {
//   document.querySelector("#score").innerHTML = "Score: " + score;
// }






// function isString(x,y,z) {
//     if ((typeof(x) == "string") && (typeof(y) == "string") && (typeof(z) == "string")) {
//       console.log("All three are strings");
//     }
//       else (console.log("At least one is not a string"));
//   }
  
  //Use an array to track words already used
  //Use an array to track letters already guessed
  //Choose a random word from wordListArray
  //send underlined spaces to represent each letter of the currentWord
  //send message to the screen to choose a letter
  //watch for user input of a key
  //capture key into var userGuess
  //document.onkeyup = function(event) {
    //get value of keypress
  //Step through currentWord one char at a time and see if userGuess matches it
  //If we have a match, replace '_' with the letter
  //Continue all the way through the word (could be duplicates of the same letter) 
  //If the letter is not in the word, countOfGuesses +=
  //Repeat until all letters are filled in or 
  //If there are no more guesses allowed - do what?
  }
  