var banner = document.querySelector('#banner');
var selectGameType = document.querySelector('.select-game-container');
var selectClassicFighter = document.querySelector('#classicFighters');
var selectExtendedFighter = document.querySelector('#extendedFighters');
var matchOutcome = document.querySelector('.match-outcome');
var chooseGameBtn = document.querySelector('#chooseGameBtn');
var userWins = document.querySelector('#userWins');
var compWins = document.querySelector('#compWins');
var resetScoreBtn = document.querySelector('#resetScoreBtn');

var userCurrent;
var compCurrent;

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

selectGameType.addEventListener('click', selectGame);
selectClassicFighter.addEventListener('click', (e) => {
    userSelectFighter(e, classicFighters);
    initiateMatch(classicFighters);
    renderMatch(selectClassicFighter);
});
selectExtendedFighter.addEventListener('click', (e) => {
    userSelectFighter(e, extendedFighters);
    initiateMatch(extendedFighters);
    renderMatch(selectExtendedFighter);
});
chooseGameBtn.addEventListener('click', returnToSelectGame);

function selectGame(e) {
    var selectedGame = e.target.closest('article');
    if (selectedGame.id === 'classicGame') {
        banner.innerText = "Choose Your Fighter!"
        toggleDisplay(selectGameType);
        toggleDisplay(selectClassicFighter);
        toggleDisplay(chooseGameBtn);
    } else if (selectedGame.id === 'extendedGame') {
        banner.innerText = "Choose Your Fighter!"
        toggleDisplay(selectGameType);
        toggleDisplay(selectExtendedFighter);
        toggleDisplay(chooseGameBtn);
    }
}

function userSelectFighter(e, fighters) {
    var selectedFighter = e.target.closest('div');
    for (var i = 0; i < fighters.length; i++) {
        if (selectedFighter.id === fighters[i].name) {
            userCurrent = updateUser(fighters[i]);
        }
    }
    return userCurrent;
}

function initiateMatch(fighters) {
    compCurrent = updateComp(getRandomFighter(fighters));
    checkForVictory(userCurrent, compCurrent);
}

function renderMatch(game) {
        toggleDisplay(game);
        if (userCurrent.victor) {
            banner.innerText = `${userCurrent.name} Wins!`
        } else if (compCurrent.victor) {
            banner.innerText = `${compCurrent.name} Wins!`
        } else {
            banner.innerText = 'Draw';
        }
        userWins.innerText = userCurrent.wins;
        compWins.innerText = compCurrent.wins;
        toggleDisplay(matchOutcome);
        matchOutcome.innerHTML += `
            <div>${userCurrent.currentFighter.emoji}</div>
            <div>${compCurrent.currentFighter.emoji}</div>`
}

function returnToSelectGame() {
    banner.innerText = "Choose Your Game!"
    toggleDisplay(selectGameType);
    toggleDisplay(chooseGameBtn);
    if (!selectClassicFighter.classList.contains('hidden')) {
        selectClassicFighter.classList.add('hidden')
    } else if (!selectExtendedFighter.classList.contains('hidden')) {
        selectExtendedFighter.classList.add('hidden');
    }
}

function updateComp(currentFighter, wins = 0,) {
    return {
        name: 'Steve',
        currentFighter,
        wins,
        victor: false
    }
}

function updateUser(currentFighter, wins = 0, name = 'Human') {
    return {
        name,
        currentFighter,
        wins,
        victor: false
    }
}

function checkForVictory(user, comp) {
    if (user.currentFighter.name === comp.currentFighter.name) return;
    if (user.currentFighter.defeats.includes(comp.currentFighter.name)) {
        user.victor = true;
        user.wins += 1;
        return user;
    } else if (comp.currentFighter.defeats.includes(user.currentFighter.name)) {
        comp.victor = true;
        comp.wins += 1;
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