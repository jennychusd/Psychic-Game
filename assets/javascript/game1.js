var possibleAns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentAns = "";
var userGuess = "";
var guessesRemaining = "";
var guessed = [];

function newGame () {
	//generates new answer
	currentAns = possibleAns[Math.floor(Math.random() * possibleAns.length)];
	console.log("Current answer: " + currentAns);
	//reset guesses left and already guessed
	document.getElementById("guessesLeft").innerHTML = 10;
	document.getElementById("alreadyGuessed").innerHTML = "";
}

function wrongGuess () {
	//display guesses
	document.getElementById("alreadyGuessed").innerHTML += userGuess + " ";
	// var listGuesses = String(document.getElementById("alreadyGuessed").innerHTML);
	// listGuesses += userGuess + " ";
	// document.getElementById("alreadyGuessed").innerHTML = listGuesses;
	//decrease guesses left
	guessesRemaining = Number(document.getElementById("guessesLeft").innerHTML);
	guessesRemaining -= 1
	document.getElementById("guessesLeft").innerHTML = guessesRemaining;
	if (guessesRemaining === 0) {
		loseGame ();
	}
}

function winGame () {
	//increase wins count
	var winsCount = Number(document.getElementById("winsCount").innerHTML);
	console.log("Previous wins: " + winsCount);
	winsCount += 1;
	console.log("New wins: " + winsCount);
	document.getElementById("winsCount").innerHTML = winsCount;
	newGame ();
}

function loseGame () {
	var losesCount = Number(document.getElementById("losesCount").innerHTML);
	losesCount += 1;
	document.getElementById("losesCount").innerHTML = losesCount;
	document.getElementById("alreadyGuessed").innerHTML = "";
	newGame ();
}

function checkGuessedArr () {
	for ( i = 0; i < guessed.length; i++) {
		if (event.key === guessed[i]) {
			return true;
			console.log("already guessed this letter")
		} else {
		}
	}
}

window.onkeydown = function(event) {
	checkGuessedArr();
	if (event.keyCode >= 65 && event.keyCode <= 90 && checkGuessedArr === false) {
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("User guess is: " + userGuess);
		//need to write this as if statment - if userGuess does not already exist in array
		guessed.push(userGuess);
		if (userGuess === currentAns) {
			winGame();
		} else {
			wrongGuess();
		}
	} else {
	}
}