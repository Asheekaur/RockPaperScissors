const homePage = document.querySelector(".home-page");
const rulesBtn = document.querySelector(".rules-btn");
const rulesPage = document.querySelector(".rules-page");
const startBtn = document.querySelector(".start-btn");

rulesBtn.addEventListener("click", e => {
    e.preventDefault();

    homePage.style.display = 'none';
    rulesPage.style.display = 'block';
});
