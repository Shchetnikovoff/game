const cards = document.querySelectorAll('.card');
let isFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;



function flipCard(event) {
    if (lockBoard) return;

    let item = event.target.parentElement;
    if (item == firstCard) return;
    item.classList.add('flip');
    if (!isFlippedCard) {
        isFlippedCard = true;
        firstCard = item;
        return;
    }
    secondCard = item;
    firstCard.dataset.education == secondCard.dataset.education ? disabledCards() : unflippedCards();

}

cards.forEach(card => card.addEventListener('click', flipCard));

function disabledCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    isFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function unflippedCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        isFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
    }, 1000);
}
[...cards].forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
})