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

var userPick;
var compPick;

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
    } else if (comp.currentFighter.defeats.includes(user.currentFighter.name)) {
        computer.victor = true;
        computer.wins++
    }
}

function getRandomFighter(fighters) {
    return fighters[Math.floor(Math.random() * fighters.length)]
}
