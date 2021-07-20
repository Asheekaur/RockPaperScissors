const homePage = document.querySelector(".home-page");
const rulesBtn = document.querySelector(".rules-btn");
const rulesPage = document.querySelector(".rules-page");
const startBtn = document.querySelector(".start-btn");
const backBtn = document.querySelector(".back-btn-1");
const gamePage = document.querySelector(".game-page");
const RulesBackBtn = document.querySelector(".back-btn-2");

rulesBtn.addEventListener("click", e => {
    homePage.style.display = 'none';
    rulesPage.style.display = 'block';
});

backBtn.addEventListener("click", e => {
    homePage.style.display = 'block';
    rulesPage.style.display = 'none';
});

startBtn.addEventListener("click", e => {
    gamePage.style.display = 'block';
    rulesPage.style.display = 'none';
});

RulesBackBtn.addEventListener("click", e => {
    gamePage.style.display = 'none';
    rulesPage.style.display = 'block';
});