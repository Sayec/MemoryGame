const startButton = document.querySelector('form a.start');
const startValue = document.querySelector('form input');
const boardGame = document.querySelector('div.board');

startButton.addEventListener('click', () => {
  console.log(startValue.value);
  const boardSize = 100 * startValue.value + 50;
  boardGame.style.height = `${boardSize}px`;
  boardGame.style.width = `${boardSize}px`;
  for (let i = 0; i < startValue.value * startValue.value; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.innerHTML = 'TEST';
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    boardGame.appendChild(card);
  }
});
