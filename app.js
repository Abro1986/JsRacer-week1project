//See a two "players" on the left side of the screen, one above another.
//See a finish line on the right side of the screen.
//Move each player towards the finish line by pressing a specific key (ex. right arrow for player one, 'd' for player 2).
//Let the players know the race is over when one player has crossed the finish line

const rainbow = document.getElementById('rainbow');

const brown = document.getElementById('brown');

const finish = document.getElementById("finish")



// Set some starting points for the trout
let brownRight = 0
let rainbowRight = 0

//created a function that takes an argument key and moves pieces 5px, and checks for winners
function swim(key) {
if(key.keyCode == 68) {
	brownRight += 15;
	brown.style.left = brownRight + "px";

} if(key.keyCode == 39) { 
		rainbowRight += 15;
		rainbow.style.left = rainbowRight + "px";
		

} if (rainbowRight >= 950) {
		alert("Rainbow trout wins!");

} if (brownRight >= 950) 
		alert("Brown trout wins!")
}
// creating an event listener on the document to listen for keydowns
document.onkeyup = swim;















