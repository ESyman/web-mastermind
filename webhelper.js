var buttonElement = document.getElementById("submit-guess");

window.onload = start;
//initializations
var colors=[], code=[], guess=[], feedback=[]; newGame = true;
var turn=1;
colors = ["r","b","g","w","c","y"];
// add arrays for thisTurn, turnRecords
var thisTurn = [], turnRecords = [];
var alertString="";

function start() {
    setup();
}

function setup() {
	var welcome ="<h1>Welcome to Mastermind</h1>\n<p>Here are instructions.</p>\n<p class=\"hide\">Colors include [r]ed, [c]yan, [y]ellow, [w]hite, [b]lack, [g]reen. Click button to proceed.</p>"; //A heading is an automatically sized piece of text. <p></p> stands for paragraph. \n separates the lines and makes it more user-friendly in the code but doesn't change anything that's displayed on the page.
    var buttonElement = document.getElementById("submit-guess"); //sets the variable equal to the element from ID "submit-guess" // it goes and finds an element by its Id
    buttonElement.innerHTML = "Start game"; 
	var board = document.getElementById("board"); //sets the variable equal to the element from ID "board"
	board.innerHTML = welcome; //Sets the inner HTML of board to welcome.
    buttonElement.onclick = function () {
		startGame();
		}
}

function startGame() {
	code=setCode(colors);
	var startPlay="<h1>Code is set up.</h1><p>Pick your four choices for guess number.</p> \nDebug: code is "+code;
	var buttonElement = document.getElementById("submit-guess"); //sets the variable equal to the element from ID "submit-guess"
    buttonElement.innerHTML = "Subit color choices";
	var board = document.getElementById("board"); //sets the variable equal to the element from ID "board"
	board.innerHTML=startPlay; //Sets the inner HTML of board to startPlay.
	buttonElement.onclick = function () {
		newGetGuess(code);
		}
		return code;
}

function newGetGuess(code) {
	var guess =[]; 
	//var turn = 1;
	console.log("Turn +"+turn);
	for (var i=0;i<4;i++){
		g=document.getElementById(i);
		guess[i]=g.options[g.selectedIndex].value;
	}
	/*alertString=alertString.concat(guess.join(" "));
	board.innerHTML=alertString;
	return guess;*/
	masterMain(code,guess);
}

function masterMain(code, guess){ //pass guess to it, then add alertString to post guess to board, whatever that means
  var alertString="<h1>Mastermind</h1><p>Guess "+turn+": ";
  alertString=alertString.concat(guess.join(" "));
  alertString=alertString.concat(" || ");
	var feedback=testGuess(code,guess); //feedback is an array variable
	alertString=alertString.concat(feedback.join(" "));
	board.innerHTML=alertString;
	//return guess;
}