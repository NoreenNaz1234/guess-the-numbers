let computerGuess;
let userGuessLog = [];
// let space = " "; i need space
let attempt = 0;
let maaxguess = 10;


function selectEsy() {
	maaxguess = 10;

}

function selectHrd() {
	maaxguess = 05;

}


function newGame(){
	window.location.reload();

}


function init() {
	computerGuess = Math.floor(Math.random() * 100 +1);
	// console.log(computerGuess);
	// document.getElementById( 'gameOver' ).style.display = 'none';
}

function compareGuess() {
	let userGuess = " " + document.querySelector("#inputBox").value;
	userGuessLog.push(userGuess);
	document.querySelector("#guesslog").innerHTML = userGuessLog;
	document.getElementById('inputBox').value="";

attempt++;
document.querySelector("#attemps").innerHTML = attempt;

if (userGuessLog.length < maaxguess) {
	if (userGuess > computerGuess) {
	document.querySelector("#getNum").innerHTML = "Your guess is too high";
	document.querySelector("#getNum").value = "";
} else if (userGuess < computerGuess) {
	document.querySelector("#getNum").innerHTML = "Your guess is too low";
	document.querySelector("#getNum").value = "";

}else{
	document.querySelector("#getNum").innerHTML = "Correct!!";
}


} else{
	if (userGuess > computerGuess) {
		document.querySelector("#getNum").innerHTML = "You lose!";
	} else if (userGuess < computerGuess) {
		document.querySelector("#getNum").innerHTML = "You lose!";

	} else {
		document.querySelector("#getNum").innerHTML = "Correct!";
}
}
	}