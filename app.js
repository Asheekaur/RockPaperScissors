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
    document.querySelector(".timer-block").style.display = "block";
    playerName();
    randomProfilePic();
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

const icon1Output = document.querySelector(".icon1-Output-left");
const icon2Output = document.querySelector(".icon2-Output-left");
const icon3Output = document.querySelector(".icon3-Output-left");
const iconOutputRight = document.querySelector(".icon-output-right");
const iconImg = document.querySelector(".icon-img");

function ClickIcon() {
    const player1IconBtn1 = document.querySelector(".player1-icon-btn1");
    player1IconBtn1.addEventListener("click", e => {
        icon1Output.style.display = "block";
        randomIcons();
    });
    const player1IconBtn2 = document.querySelector(".player1-icon-btn2");
    player1IconBtn2.addEventListener("click", e => {
        icon2Output.style.display = "block";
        randomIcons();
    });
    const player1IconBtn3 = document.querySelector(".player1-icon-btn3");
    player1IconBtn3.addEventListener("click", e => {
        icon3Output.style.display = "block";
        randomIcons();
    });
}

let iconOptions = new Array("img/paper-img.png", "img/rock-img.png", "img/Scissors-img.png");
const rightIconOutput = document.querySelector(".icon-output-block-right");

function randomIcons() {
    rightIconOutput.style.display = "block";
    let randomIcon = Math.floor(Math.random() * iconOptions.length);
    document.getElementById("randomOutput").src = iconOptions[randomIcon];
}

const player1Pic = document.querySelector(".player1-profile-pic");
const player2Pic = document.querySelector(".player2-profile-pic");

let player1ProfilePic = new Array("img/profile-img1.png", "img/profile-img3.png", "img/profile-img4.png", "img/profile-img6.png");
let player2ProfilePic = new Array("img/profile-img2.png", "img/profile-img5.png", "img/profile-img7.png", "img/profile-img8.png");

function randomProfilePic() {
    let randomPlayer1Pic = Math.floor(Math.random() * player1ProfilePic.length);
    player1Pic.src = player1ProfilePic[randomPlayer1Pic];
    let randomPlayer2Pic = Math.floor(Math.random() * player2ProfilePic.length);
    player2Pic.src = player2ProfilePic[randomPlayer2Pic];
}

let secs = 1 * 10;

function countdown() {
    document.querySelector(".start-timer").style.display = "none";
    document.querySelector(".timer").style.display = "block";
    setTimeout('decrement()', 10);
    ClickIcon();
}

function decrement() {
    seconds = document.querySelector(".seconds");
    if (seconds < 10) {
        seconds.value = secs;
    }
    else {
        seconds.value = getseconds();
    }
    if (secs < 0) {
        document.querySelector(".times-up").style.display = "block";
        document.querySelector(".timer").style.display = "none";
    }
    else {
        if (secs < 10) {
            document.querySelector(".timer").innerHTML = "00:" + "0" + secs--;
        }
        else {
            document.querySelector(".timer").innerHTML = "00:" + secs--;
        }
        setTimeout('decrement()', 1000);
    }
}

function getseconds() {
    return secs - Math.round(1 * 10);
}
