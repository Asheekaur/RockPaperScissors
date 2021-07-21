const player2Names = ["Jessica", "James", "Janet", "David", "Emma", "Ryan"];

const homePage = document.querySelector(".home-page");

const rulesBtn = document.querySelector(".rules-btn");
const rulesPage = document.querySelector(".rules-page");
const startBtn = document.querySelector(".start-btn");
const backBtn = document.querySelector(".back-btn-1");

const gamePage = document.querySelector(".game-page");
const RulesBackBtn = document.querySelector(".back-btn-2");
const playerUsername = document.getElementById("player-username");
const player1Name = document.querySelector(".player1-name");
const player2Name = document.querySelector(".player2-name");
const UserNamePattern = /^\w{0,10}\s\w{0,10}|\s|\S$/gi;

rulesBtn.addEventListener("click", e => {
    if (UserNamePattern.test(playerUsername.value) && (playerUsername.value != 0)) {
        homePage.style.display = 'none';
        rulesPage.style.display = 'block';
    }
    else {
        homePage.style.display = "block";
    }
});
backBtn.addEventListener("click", e => {
    homePage.style.display = 'block';
    rulesPage.style.display = 'none';
});
startBtn.addEventListener("click", e => {
    gamePage.style.display = 'block';
    rulesPage.style.display = 'none';
    playerName();
});
function playerName() {
    player1Name.innerHTML = playerUsername.value;
    let randomName = Math.floor(Math.random() * player2Names.length);
    player2Name.innerHTML = player2Names[randomName];
}
RulesBackBtn.addEventListener("click", e => {
    gamePage.style.display = 'none';
    rulesPage.style.display = 'block';
});
