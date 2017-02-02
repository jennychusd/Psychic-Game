var possibleAns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentAns;
var userGuess;
var guessesRemaining;
var guessed = [];
var dupeGuess;
var losesCount;
var winsCount;

function newGame () {
	//generates new answer
	currentAns = possibleAns[Math.floor(Math.random() * possibleAns.length)];
	console.log("Current answer: " + currentAns);
	//reset guesses left and already guessed
	guessed = [];
	document.getElementById("guessesLeft").innerHTML = 10;
	document.getElementById("alreadyGuessed").innerHTML = "";
}

function winGame() {
	// get current win count
	winsCount = Number(document.getElementById("winsCount").innerHTML);
	console.log("Previous wins: " + winsCount);
    
    // add a win to the count
	winsCount += 1;
	console.log("New wins: " + winsCount);
    
    // display the new wins count
	document.getElementById("winsCount").innerHTML = winsCount;
    
    // start new game
	newGame();
}

function loseGame() {
    // get current loss count
	losesCount = Number(document.getElementById("losesCount").innerHTML);
    
    // increase lose count when user loses
	losesCount += 1;
	document.getElementById("losesCount").innerHTML = losesCount;
    
    // reset already guessed
	document.getElementById("alreadyGuessed").innerHTML = "";
    
    // start new game
	newGame();
}

function checkGuessedArr() {
   // log through the 'guessed' array to see if the current guess matches any previous guesses
    if (guessed.length == 0) {
        console.log("array empty");
        dupeGuess = false;
    }   else {
        for (i = 0; i < guessed.length; i++) {
            if (userGuess === guessed[i]) {
                console.log("duplicate guess = true");
                dupeGuess = true;
                return true;
            } else {
                dupeGuess = false;
                console.log("duplicate guess = false");
            }
        }
    }
}

function wrongGuess () {
	// check if guess already exists in array
	if (dupeGuess === false) {
		guessesRemaining = Number(document.getElementById("guessesLeft").innerHTML);
		guessesRemaining -= 1
		document.getElementById("guessesLeft").innerHTML = guessesRemaining;
	}

	// display guesses in browser
	if (dupeGuess === false) {
		document.getElementById("alreadyGuessed").innerHTML += userGuess + ", ";
	}

	// lose if no more guesses left
	if (guessesRemaining === 0) {
		loseGame ();
	}
}

window.onkeydown = function(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("User guess is: " + userGuess);
		// add userGuess to array if did not guess yet
		checkGuessedArr();
		if (dupeGuess === false) {
			guessed.push(userGuess);
			console.log(guessed);
		}
		
		// check win game or wrong guess
		if (userGuess === currentAns) {
			winGame();
		} else {
			wrongGuess();
		}
	}
}

newGame();