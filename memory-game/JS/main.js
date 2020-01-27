console.log("up and running!");


const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push('cardOne');

console.log("User Flipped" + cardOne);

let cardTwo = cards[2];

cardsInPlay.push('cardTwo');

console.log("User Flipped" + cardTwo);

cardsInPlay.length;

if (cardsInPlay.length != 2) {
	alert("You found a match");
} 
else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match");
}
else {
	alert("Sorry, try again");
}



