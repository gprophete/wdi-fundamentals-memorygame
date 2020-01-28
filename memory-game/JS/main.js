console.log("up and running!");


const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

cardsInPlay.push(cards[0, 2]);

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};
}


function flipCard(cardID){
	console.log("User flipped" + cards[cardID]);
	
};
flipCard(0);
flipCard(2);
checkForMatch();


