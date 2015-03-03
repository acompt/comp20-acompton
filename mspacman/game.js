// Andrea Compton
// Comp20 Lab 5
// 2/28/15

function init() {
	var img = new Image();  
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext("2d");

	img.addEventListener("load", function() {
		ctx.drawImage(img, 315, 0, 1200, 138, 0, 0, 1200, 138);
		ctx.drawImage(img, 80, 20, 20, 20, 40, 30, 20, 20);
	}, false);
	img.src = 'pacman10-hp-sprite.png';
}