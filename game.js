//boolean for checking key press (used for game inputs)
var rightKey = false,
	leftKey = false,
	upKey = false,
	downKey = false;
//boolean for pausing game
var gamePaused = false;
var canvas,
	ctx,
	width = document.documentElement.clientWidth * 0.80,
	height = document.documentElement.clientHeight * 0.30,
	//player-controlled object
	person = {
		x: 25,
		y: height - 50,
		w: 25,
		h: 50
	};
var enemyTotal = 5,
	enemies = [],
	enemy = {
		x: 850,
		y: height - 50,
		w: 25,
		h: 50,
		speed: 3
	};

for(var i = 0; i < enemyTotal; i++) {
	enemies.push(enemy);
}
//functions

//creates canvas element

function startGame() {
    canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    id = setInterval(gameLoop, 25);
    //add event listeners for keys being pressed and keys being released
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);
}

function clearCanvas() {
	ctx.clearRect(0,0,width,height);
}

function drawPerson() {
	//controls movement of person
	if(rightKey) {
		person.x += 5;
	}
	else if(leftKey) {
		person.x -= 5;
	}
	if(upKey && person.y == (height - 50)) {
		setTimeout(function() { person.y -= 40;}, 25);
	}
	if(person.y < (height - 50)) {
		person.y += 5;
	}
	if(person.x <= 0) {
		person.x = 0;
	}
	if((person.x + person.w) >= width) {
		person.x = width - person.w;
	}
	if(person.y <= 0) {
		person.y = 0;
	}
	ctx.fillStyle = "green";
	ctx.fillRect(person.x, person.y, person.w, person.h);
}
//creates enemies

function drawEnemies() {
	for(var i = 0; i < enemies.length; i++) {
		ctx.fillStyle = "red";
		ctx.fillRect(enemies[i].x, enemies[i].y, enemy.w, enemy.h);
	}
}

//moves enemies

function moveEnemies() {
	for(var i = 0; i < enemies.length; i++) {
		if(enemies[i].x > 0) {
			enemies[i].x -= 1;
		}else if(enemies[i].x <= 0) {
			enemies[i].x = 850;
		}
	}
}
function gameLoop() {
	clearCanvas();
	moveEnemies();
	drawEnemies();
	drawPerson();
}

function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
}

function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

//startGame() function called when window loads.

window.onload = startGame;
