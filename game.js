var gameOn = false;

function startGame() {
    myGameArea.start();
}

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
	startButton.addEventListener("click", function() {
	startGame();
	
	var pauseButton = document.createElement("button");
	var text1 = document.createTextNode("Pause");
	pauseButton.appendChild(text1);
	document.querySelector("p").appendChild(pauseButton);

	var refreshButton = document.createElement("button");
	var text2 = document.createTextNode("Refresh");
	refreshButton.appendChild(text2);
	document.querySelector("p").appendChild(refreshButton);

	var closeButton = document.createElement("button");
	var text3 = document.createTextNode("Close");
	closeButton.appendChild(text3);
	document.querySelector("p").appendChild(closeButton);
	});
}

//when startButton is clicked, create three new buttons "pause", "refresh", and "close"



