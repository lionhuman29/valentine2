const messages = [
    "Are you sure?No?",
    "Really sure??",
    "Are you not willing to be my valentine?",
    "Pookie please....(Still no)?No",
    "Just think about it!No?",
    "If you say no, I will be really sad... Still u choose no?",
    "I will be very sad... No?",
    "I will be very very very sad...No?",
    "Ok fine, I will stop asking... Still no?",
    "Just kidding, say yes please! ❤️ Still no?"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}