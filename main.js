var title = document.querySelector("h1");
var starry = document.querySelector("body");
var starryBackdrop = document.querySelector("#nightSky");
var userInfoContainer = document.querySelector("#playerUser");
var compInfoContainer = document.querySelector("#playerComp");
var addUserName = document.querySelector("#addName");
var userNameForm = document.querySelector("#userForm");
var userNameInput = document.querySelector("#userInput");
var userNameSubmit = document.querySelector("#submitBtn")
var banner = document.querySelector("#banner");
var selectGameType = document.querySelector(".select-game-container");
var selectClassicFighter = document.querySelector("#classicFighters");
var selectExtendedFighter = document.querySelector("#extendedFighters");
var matchOutcome = document.querySelector(".match-outcome");
var chooseGameBtn = document.querySelector("#chooseGameBtn");
var userWins = document.querySelector("#userWins");
var compWins = document.querySelector("#compWins");
var resetScoreBtn = document.querySelector("#resetScoreBtn");

addUserName.addEventListener("click", renderUserInput);
userNameForm.addEventListener("submit", renderUserName);
chooseGameBtn.addEventListener("click", returnToSelectGame);
resetScoreBtn.addEventListener("click", resetScore);
selectGameType.addEventListener("click", selectGame);
selectClassicFighter.addEventListener("click", (e) => {
  if (addUserName.classList.contains("hidden")) return;
  userSelectFighter(e, classicFighters);
  initiateMatch(classicFighters);
  renderMatch(selectClassicFighter);
  resetMatch(selectClassicFighter);
});
selectExtendedFighter.addEventListener("click", (e) => {
  if (addUserName.classList.contains("hidden")) return;
  userSelectFighter(e, extendedFighters);
  initiateMatch(extendedFighters);
  renderMatch(selectExtendedFighter);
  resetMatch(selectExtendedFighter);
});

function renderUserInput() {
  toggleDisplay(addUserName);
  toggleDisplay(userNameForm);
}

function renderUserName(e) {
  e.preventDefault();
  if (userNameInput.value === "") return;
  user.name = userNameInput.value;
  addUserName.innerText = user.name;
  console.log(user);
  renderUserInput();
  return user;
}

function selectGame(e) {
  if (addUserName.classList.contains("hidden")) return;
  var selectedGame = e.target.closest("article");
  if (selectedGame.id === "classicGame") {
    banner.innerText = "Choose your Fighter!";
    renderClassic();
    showResetScoreBtn();
    toggleDisplay(selectGameType);
    toggleDisplay(selectClassicFighter);
    toggleDisplay(chooseGameBtn);
  } else if (selectedGame.id === "extendedGame") {
    banner.innerText = "Choose your Fighter!";
    renderstarry();
    showResetScoreBtn();
    toggleDisplay(selectGameType);
    toggleDisplay(selectExtendedFighter);
    toggleDisplay(chooseGameBtn);
  }
}

function userSelectFighter(e, fighters) {
  var selectedFighter = e.target.closest("div");
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
  showResetScoreBtn();
  renderScore();
  toggleDisplay(game);
  toggleDisplay(matchOutcome);
  matchOutcome.innerHTML += `
    <div> <img src=${user.currentFighter.icon}> </div>
    <div> <img src=${comp.currentFighter.icon}> </div>`;
  if (user.victor) {
    banner.innerText = `${user.name} Wins!`;
  } else if (comp.victor) {
    banner.innerText = `${comp.name} Wins!`;
  } else {
    banner.innerText = "Draw!";
  }
}

function renderScore() {
  userWins.innerText = user.wins;
  compWins.innerText = comp.wins;
}

function resetMatch(game) {
  setTimeout(() => {
    showResetScoreBtn();
    matchOutcome.innerHTML = "";
    banner.innerText = "Choose your Fighter!";
    user.victor = false;
    comp.victor = false;
    toggleDisplay(matchOutcome);
    toggleDisplay(game);
  }, 1800);
}

function returnToSelectGame() {
  if (addUserName.classList.contains("hidden")) return;
  banner.innerText = "Choose your Game!";
  renderClassic();
  showResetScoreBtn();
  toggleDisplay(selectGameType);
  toggleDisplay(chooseGameBtn);
  if (!selectClassicFighter.classList.contains("hidden")) {
    selectClassicFighter.classList.add("hidden");
  } else if (!selectExtendedFighter.classList.contains("hidden")) {
    selectExtendedFighter.classList.add("hidden");
  }
}

function resetScore() {
  if (addUserName.classList.contains("hidden")) return;
  user.wins = 0;
  comp.wins = 0;
  renderScore();
  showResetScoreBtn();
}

function showResetScoreBtn() {
  if (user.wins > 0 || comp.wins > 0) {
    resetScoreBtn.classList.remove("hidden");
  } else {
    resetScoreBtn.classList.add("hidden");
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
  return fighters[Math.floor(Math.random() * fighters.length)];
}

function renderstarry() {
  starry.classList.add("starry");
  title.classList.add("starry");
  banner.classList.add("starry");
  userInfoContainer.classList.add("starry");
  compInfoContainer.classList.add("starry");
  userNameInput.classList.add("starry");
  userNameSubmit.classList.add("starry");
  nightSky.classList.remove("hidden");
}

function renderClassic() {
  starry.classList.remove("starry");
  title.classList.remove("starry");
  banner.classList.remove("starry");
  userInfoContainer.classList.remove("starry");
  compInfoContainer.classList.remove("starry");
  userNameInput.classList.remove("starry");
  userNameSubmit.classList.remove("starry");
  nightSky.classList.add("hidden");
}

function toggleDisplay(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}
