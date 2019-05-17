/*https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/*/

/* thanks tania* <3*/


const cardsArray = [
    {
      name: "strokes",
      img: "images/matching/isthisit.png",
    },
    {
      name: "iceage",
      img: "images/matching/beyondless.jpg",
    },
    {
      name: "smtb",
      img: "images/matching/dogwhistle.jpg",
    },

    {
      name: "anco",
      img: "images/matching/feels.jpg",
    },
    {
      name: "melody",
      img: "images/matching/melody.jpg",
    }, 
    {
      name: "steve",
      img: "images/matching/apolloxxi.jpg",
    },
    

  ]


  const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 600;

let matchedCards = 0;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});


const winner = () =>{
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 

    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }

}








const match = () => {
    const selected = document.querySelectorAll('.selected');
    console.log(selected[0].childNodes[1]);
  
 
    selected[0].childNodes[0].style.backgroundImage =   selected[0].childNodes[1].style.backgroundImage;;
    selected[1].childNodes[0].style.backgroundImage =   selected[0].childNodes[1].style.backgroundImage;;
    matchedCards +=2;
    console.log("matchedCards" + matchedCards);
    if(matchedCards === 12){
        setTimeout(winner, 1400);
    } 

    /*

    selected.forEach(card => {
        var nodeList = card.childNodes; 
        nodeList[0].setAttribute(background, "transparent");

        
    
      
    });*/
  };

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess + " " + clicked.parentNode.classList );
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess + " " + clicked.parentNode.classList);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

});