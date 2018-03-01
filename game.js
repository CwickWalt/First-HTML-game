var gameOn = false;

var myGameArea = {
    canvas :document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.canvas.setAttribute("id", "game-area");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

var startButton = document.getElementById("start-game");

if(!gameOn) {
	startButtonFunction();
}

if(gameOn === true) {
	closeButton.addEventListener("click", function() {
		closeGame();
		changeBoolean();


	});
}

//functions

//creates canvas element
function startGame() {
    myGameArea.start();
}

//toggles boolean value when function is called
function changeBoolean() {
	gameOn = !gameOn;
}

//adds onclick event to start button. It calls myGameArea.start() and changeBoolean().
function startButtonFunction() {
	startButton.addEventListener("click", function() {
	startGame();
	changeBoolean();
	startButton.style.display = "none";

	//when startButton is clicked, create three new buttons "pause", "refresh", and "close"
	//I COULD create these buttons in the html, then toggle display hide/inline using JS. Possibly a cleaner way?

	var pauseButton = document.createElement("button");
	var text1 = document.createTextNode("Pause");
	pauseButton.appendChild(text1);
	document.querySelector("p").appendChild(pauseButton);
	//I want the pause button to freeze the game
	//Then, i want to replace "pause" with "Continue"
	//next, i give the button a new function (may have to use booleans for this)
	//finally, toggle the functions for pause and continue

	var refreshButton = document.createElement("button");
	var text2 = document.createTextNode("Refresh");
	refreshButton.appendChild(text2);
	document.querySelector("p").appendChild(refreshButton);
	//I want the refresh button to start the game from the beginning

	var closeButton = document.createElement("button");
	var text3 = document.createTextNode("Close");
	closeButton.appendChild(text3);
	document.querySelector("p").appendChild(closeButton);
	//adds onclick event listener to close button that calls closeGame() and changeBoolean() functions.
	closeButton.addEventListener("click", function() {
		closeGame();
		changeBoolean();

//removes the 3 previously created buttons and shows start button. Also removes canvas element. This has to be defined inside the startButtonFunction function because the 3 buttons only exist here.
		function closeGame() {
	document.querySelector("canvas").remove();
	pauseButton.remove();
	refreshButton.remove();
	closeButton.remove();

	// this shows the start button

	startButton.style.display = "inline";
	}
});
})
}
