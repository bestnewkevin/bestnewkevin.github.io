/*

https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-process-flow

<3 also joe versoza my AIT professor
*/

let card = document.getElementsByClassName("card");
let cards = [...card];
// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", displayCard);
};
//displayCard is a function we'll talk about this soon
var openedCards = [];

var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
 }

 function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){

        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

function matched(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];
}

//for when cards don't match
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },1100);
}


//disable cards temporarily
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

//enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}






window.onload = startGame();


//modal
let modal = document.getElementById("popup1")
//stars list
 let starsList = document.querySelectorAll(".stars li");
//close icon in modal
 let closeicon = document.querySelector(".close");
//congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;
    //show congratulations modal
    modal.classList.add("show");
    //declare star rating variable
    var starRating = document.querySelector(".stars").innerHTML;
    //showing move, rating, time on modal
    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("starRating").innerHTML = starRating;
    document.getElementById("totalTime").innerHTML = finalTime;
    //closeicon on modal
    closeModal();
    };
}


//close icon on modal
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}
//for player to play Again 
function playAgain(){
    modal.classList.remove("show");
    startGame();
}


function startGame(){
 
    // empty the openCards array
    openedCards = [];

    // shuffle deck
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
    // reset rating
    for (var i= 0; i < stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
    //reset timer
    second = 0;
    minute = 0; 
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}

