console.log("up and running!");


const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png",
}
];

const cardsInPlay = [];



function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};
}


function flipCard(cardID){
	console.log("User flipped" + cards[cardID].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped" + cards[cardId].cardImage);
	console.log("User flipped" + cards[cardId].suit);
};
flipCard();
checkForMatch();




