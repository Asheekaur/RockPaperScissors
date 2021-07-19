const homePage = document.querySelector(".home-page");
const rulesBtn = document.querySelector(".rules-btn");
const rulesPage = document.querySelector(".rules-page");
const startBtn = document.querySelector(".start-btn");
const backBtn = document.querySelector(".back-btn");

rulesBtn.addEventListener("click", e => {
    e.preventDefault();

    homePage.style.display = 'none';
    rulesPage.style.display = 'block';
});


backBtn.addEventListener("click", e => {
    e.preventDefault();
    
    homePage.style.display = 'block';
    rulesPage.style.display = 'none';
});
