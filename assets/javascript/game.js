var possibleAns = ["a", "b", "c", "d", "e"];
var currentAns = "";
var userGuess = "";
var guessesRemaining = "";
var guessed = [];

function newGame () {
	//generates new answer
	currentAns = possibleAns[Math.floor(Math.random() * possibleAns.length)];
	console.log("Current answer: " + currentAns);
}

function winGame () {
	//increase wins count
	var winsCount = Number(document.getElementById("winsCount").innerHTML);
	console.log("Previous wins: " + winsCount);
	winsCount += 1;
	console.log("New wins: " + winsCount);
	document.getElementById("winsCount").innerHTML = winsCount;
	document.getElementById("guessesLeft").innerHTML = 10;
	document.getElementById("alreadyGuessed").innerHTML = "";
	newGame ();
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

function loseGame () {
	var losesCount = Number(document.getElementById("losesCount").innerHTML);
	losesCount += 1;
	document.getElementById("losesCount").innerHTML = losesCount;
	document.getElementById("alreadyGuessed").innerHTML = "";
}

window.onkeydown = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("User guess is: " + userGuess);
	//need to write this as if statment - if userGuess does not already exist in array
	guessed.push(userGuess);
	if (userGuess === currentAns) {
		winGame();
	} else {
		wrongGuess();
	}
}