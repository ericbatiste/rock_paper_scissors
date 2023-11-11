var fighters = [
    {name: 'Rock', defeats: ['Scissors']},
    {name: 'Scissors', defeats: ['Paper']},
    {name: 'Paper', defeats: ['Rock']},
    {name: 'Alien', defeats: ['Shroom', 'Diamond']},
    {name: 'Shroom', defeats: ['Diamond', 'Dragon']},
    {name: 'Diamond', defeats: ['Dragon', 'Teddy']},
    {name: 'Dragon', defeats: ['Teddy', 'Alien']},
    {name: 'Teddy', defeats: ['Alien', 'Shroom']}
]

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
