//See a two "players" on the left side of the screen, one above another.
//See a finish line on the right side of the screen.
//Move each player towards the finish line by pressing a specific key (ex. right arrow for player one, 'd' for player 2).
//Let the players know the race is over when one player has crossed the finish line

let rainbow = document.getElementById('rainbow');

const brown = document.getElementById('brown');


console.log(rainbow)


let brownRight = 0
let rainbowRight = 0

function anim(e) {
if(e.keyCode == 68) {
	brownRight += 5;
	brown.style.left = brownRight + "px";

} else if(e.keyCode == 39) { 
		rainbowRight += 5;
		rainbow.style.left = rainbowRight + "px"
	}
}

document.onkeydown = anim;

//function rainbo(e) {
//	if(e.keyCode == 38) { 
//		rainbowRight += 5;
//		rainbow.style.left = rainbowRight + "px"
//	}
//}

//document.onkeydown = rainbo;