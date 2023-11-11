var selectGameType = document.querySelector('.select-game-container');
var classicGame = document.querySelector('#classicGame');
var extendedGame = document.querySelector('#extendedGame');
var selectClassicFighter = document.querySelector('#classicFighters');
var selectExtendedFighter = document.querySelector('#extendedFighters');
var chooseGameBtn = document.querySelector('#chooseGameBtn');
var resetScoreBtn = document.querySelector('#resetScoreBtn');

var userFighter;
var compFighter;

var classicfighters = [
    {name: 'Rock', defeats: ['Scissors']},
    {name: 'Scissors', defeats: ['Paper']},
    {name: 'Paper', defeats: ['Rock']},
]

var expandedFighters = [
    {name: 'Alien', defeats: ['Shroom', 'Diamond']},
    {name: 'Shroom', defeats: ['Diamond', 'Dragon']},
    {name: 'Diamond', defeats: ['Dragon', 'Teddy']},
    {name: 'Dragon', defeats: ['Teddy', 'Alien']},
    {name: 'Teddy', defeats: ['Alien', 'Shroom']}
]

selectGameType.addEventListener('click', selectGame)

function selectGame(e) {
    var selectedGame = e.target.closest('article');
    if (selectedGame.id === 'classicGame') {
        toggleDisplay(selectGameType);
        toggleDisplay(selectClassicFighter);
        toggleDisplay(chooseGameBtn);
    } else if (selectedGame.id === 'extendedGame') {
        toggleDisplay(selectGameType);
        toggleDisplay(selectExtendedFighter);
        toggleDisplay(chooseGameBtn);
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