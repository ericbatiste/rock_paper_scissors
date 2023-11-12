var addUserName = document.querySelector('#addName');
var userNameForm = document.querySelector('#userForm')
var userNameInput = document.querySelector('#userInput')
var banner = document.querySelector('#banner');
var selectGameType = document.querySelector('.select-game-container');
var selectClassicFighter = document.querySelector('#classicFighters');
var selectExtendedFighter = document.querySelector('#extendedFighters');
var matchOutcome = document.querySelector('.match-outcome');
var chooseGameBtn = document.querySelector('#chooseGameBtn');
var userWins = document.querySelector('#userWins');
var compWins = document.querySelector('#compWins');
var resetScoreBtn = document.querySelector('#resetScoreBtn');

var user = {
    name: 'Human',
    currentFighter: null,
    wins: 0,
    victor: false
}

var comp = {
    name: 'Steve',
    currentFighter: null,
    wins: 0,
    victor: false
}

var classicFighters = [
    {name: 'Rock', emoji: '🪨', defeats: ['Scissors']},
    {name: 'Scissors', emoji: '✂️', defeats: ['Paper']},
    {name: 'Paper', emoji: '📄', defeats: ['Rock']},
]

var extendedFighters = [
    {name: 'Alien', emoji: '👽', defeats: ['Shroom', 'Diamond']},
    {name: 'Shroom', emoji: '🍄', defeats: ['Diamond', 'Dragon']},
    {name: 'Diamond', emoji: '💎', defeats: ['Dragon', 'Teddy']},
    {name: 'Dragon', emoji: '🐉', defeats: ['Teddy', 'Alien']},
    {name: 'Teddy', emoji: '🧸', defeats: ['Alien', 'Shroom']}
]

addUserName.addEventListener('click', renderUserInput);
userNameForm.addEventListener('submit', renderUserName)
chooseGameBtn.addEventListener('click', returnToSelectGame);
resetScoreBtn.addEventListener('click', resetScore);
selectGameType.addEventListener('click', selectGame);
selectClassicFighter.addEventListener('click', (e) => {
    userSelectFighter(e, classicFighters);
    initiateMatch(classicFighters);
    renderMatch(selectClassicFighter);
    resetMatch(selectClassicFighter);
});
selectExtendedFighter.addEventListener('click', (e) => {
    userSelectFighter(e, extendedFighters);
    initiateMatch(extendedFighters);
    renderMatch(selectExtendedFighter);
    resetMatch(selectExtendedFighter);
});

function renderUserName(e) {
    e.preventDefault();
    if (userNameInput.value === '') return;
    user.name = userNameInput.value;
    addUserName.innerText = user.name;
    console.log(user);
    renderUserInput();
    return user;
}

function renderUserInput() {
    toggleDisplay(addUserName);
    toggleDisplay(userNameForm);
}


function selectGame(e) {
    var selectedGame = e.target.closest('article');
    if (selectedGame.id === 'classicGame') {
        banner.innerText = "Choose Your Fighter!"
        showResetScoreBtn();
        toggleDisplay(selectGameType);
        toggleDisplay(selectClassicFighter);
        toggleDisplay(chooseGameBtn);
    } else if (selectedGame.id === 'extendedGame') {
        banner.innerText = "Choose Your Fighter!"
        showResetScoreBtn();
        toggleDisplay(selectGameType);
        toggleDisplay(selectExtendedFighter);
        toggleDisplay(chooseGameBtn);
    }
}

function userSelectFighter(e, fighters) {
    var selectedFighter = e.target.closest('div');
    for (var i = 0; i < fighters.length; i++) {
        if (selectedFighter.id === fighters[i].name) {
            user.currentFighter = fighters[i];
        }
    }
    return user;
}

function initiateMatch(fighters) {
    comp.currentFighter = getRandomFighter(fighters);
    checkForVictory(user, comp);
}

function renderMatch(game) {
    showResetScoreBtn()
    renderScore();
    toggleDisplay(game);
    toggleDisplay(matchOutcome);
    matchOutcome.innerHTML += `
    <div>${user.currentFighter.emoji}</div>
    <div>${comp.currentFighter.emoji}</div>`
    if (user.victor) {
        banner.innerText = `${user.name} Wins!`
    } else if (comp.victor) {
        banner.innerText = `${comp.name} Wins!`
    } else {
        banner.innerText = 'Draw';
    }
}

function resetMatch(game) {
    setTimeout(() => {
        showResetScoreBtn();
        matchOutcome.innerHTML = '';
        banner.innerText = 'Choose Your Fighter';
        user.victor = false;
        comp.victor = false;
        toggleDisplay(matchOutcome);
        toggleDisplay(game);
    }, 1500);
}

function returnToSelectGame() {
    banner.innerText = "Choose Your Game!"
    showResetScoreBtn();
    toggleDisplay(selectGameType);
    toggleDisplay(chooseGameBtn);
    if (!selectClassicFighter.classList.contains('hidden')) {
        selectClassicFighter.classList.add('hidden')
    } else if (!selectExtendedFighter.classList.contains('hidden')) {
        selectExtendedFighter.classList.add('hidden');
    }
}

function renderScore() {
    userWins.innerText = user.wins;
    compWins.innerText = comp.wins;
}

function resetScore() {
    user.wins = 0;
    comp.wins = 0;
    renderScore();
    showResetScoreBtn();
}

function showResetScoreBtn() {
    if (user.wins > 0 || comp.wins > 0) {
        resetScoreBtn.classList.remove('hidden');
    } else {
        resetScoreBtn.classList.add('hidden');
    }
}

function checkForVictory() {
    if (user.currentFighter.name === comp.currentFighter.name) return;
    if (user.currentFighter.defeats.includes(comp.currentFighter.name)) {
        user.victor = true;
        user.wins++;
        return user;
    } else if (comp.currentFighter.defeats.includes(user.currentFighter.name)) {
        comp.victor = true;
        comp.wins++;
        return comp;
    }
}

function getRandomFighter(fighters) {
    return fighters[Math.floor(Math.random() * fighters.length)]
}

function toggleDisplay(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}