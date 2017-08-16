var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;
var loss = 0;
var left = 10;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var myGuess = "";

document.onkeyup = function(event) {
	var input = event.key;
	if (left == 0) {
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		left = 10;
	}
	
	
	if (input == computerGuess) {
		win++;
		left = 10;
		
	}
	else {
		myGuess += input + " ";
		left--;
		if (left == 0) {
			loss++;
			myGuess = "";			
		}
	}
	
	
	var html = 
		"<p>Your choice: " + input + "</p>" +
		"<p>Wins: " + win + "</p>" +
		"<p>Losses: " + loss + "</p>" +
		"<p>Guesses left: " + left + "</p>" + 
		"<p>Your choices so far: " + myGuess + "</p>";
	document.querySelector("#game").innerHTML = html;
}