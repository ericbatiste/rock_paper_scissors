var selectGameType = document.querySelector('.select-game-container');
var selectClassicFighter = document.querySelector('#classicFighters');
var selectExtendedFighter = document.querySelector('#extendedFighters');
var banner = document.querySelector('#banner');
var chooseGameBtn = document.querySelector('#chooseGameBtn');
var resetScoreBtn = document.querySelector('#resetScoreBtn');

var userFighter;
var compFighter;

var classicfighters = [
    {name: 'Rock', defeats: ['Scissors']},
    {name: 'Scissors', defeats: ['Paper']},
    {name: 'Paper', defeats: ['Rock']},
]

var extendedFighters = [
    {name: 'Alien', defeats: ['Shroom', 'Diamond']},
    {name: 'Shroom', defeats: ['Diamond', 'Dragon']},
    {name: 'Diamond', defeats: ['Dragon', 'Teddy']},
    {name: 'Dragon', defeats: ['Teddy', 'Alien']},
    {name: 'Teddy', defeats: ['Alien', 'Shroom']}
]

selectGameType.addEventListener('click', selectGame);
selectClassicFighter.addEventListener('click', (e) => {
    userSelectFighter(e, classicfighters);
});
selectExtendedFighter.addEventListener('click', (e) => {
    userSelectFighter(e, extendedFighters);
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
            userFighter = updateUser(fighters[i]);
        }
    }
    return userFighter;
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
    if (user.currentFighter.defeats.includes(comp.currentFighter.name)) {
        user.victor = true;
        user.wins++;
        console.log('user');
    } else if (comp.currentFighter.defeats.includes(user.currentFighter.name)) {
        comp.victor = true;
        comp.wins++
        console.log('comp')
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