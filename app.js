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
    player1Username();
    player2Username();
    randomProfilePic();
});
function player1Username() {
    player1Name.innerHTML = playerUsername.value;
}
function player2Username() {
    let randomName = Math.floor(Math.random() * player2Names.length);
    player2Name.innerHTML = player2Names[randomName];
}
RulesBackBtn.addEventListener("click", e => {
    gamePage.style.display = 'none';
    rulesPage.style.display = 'block';
    document.querySelector(".timer-block").style.display = "none";
});
const icon1Output = document.querySelector(".icon1-Output-left");
const icon2Output = document.querySelector(".icon2-Output-left");
const icon3Output = document.querySelector(".icon3-Output-left");
const iconOutputRight = document.querySelector(".icon-output-right");
const iconImg = document.querySelector(".icon-img");
const player1IconBtn1 = document.querySelector(".player1-icon-btn1");
const player1IconBtn2 = document.querySelector(".player1-icon-btn2");
const player1IconBtn3 = document.querySelector(".player1-icon-btn3");
let playerChoice;
disabledBtn();
player1IconBtn1.addEventListener("click", e => {
    playerChoice = 1;
    document.getElementById("playerOutput").src = "img/rock1.jpg";
    disabledBtn();
    randomIcons();
    stopTimer();
    restart();
});
player1IconBtn2.addEventListener("click", e => {
    playerChoice = 2;
    document.getElementById("playerOutput").src = "img/paper1.jpg";
    disabledBtn();
    randomIcons();
    stopTimer();
    restart();
});
player1IconBtn3.addEventListener("click", e => {
    playerChoice = 3;
    document.getElementById("playerOutput").src = "img/scissors1.png";
    disabledBtn();
    randomIcons();
    stopTimer();
    restart();
});
function disabledBtn() {
    player1IconBtn1.disabled = true;
    player1IconBtn2.disabled = true;
    player1IconBtn3.disabled = true;
}
function workingBtn() {
    player1IconBtn1.disabled = false;
    player1IconBtn2.disabled = false;
    player1IconBtn3.disabled = false;
}
const leftIconOutput = document.querySelector(".icon-output-block-left");
const rightIconOutput = document.querySelector(".icon-output-block-right");
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
let OnClickTimerStop;
function countdown() {
    workingBtn();
    document.querySelector(".start-timer").style.display = "none";
    document.querySelector(".timer").style.display = "block";
    setTimeout('decrement()', 10);
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
        OnClickTimerStop = setTimeout('decrement()', 1000);
    }
}
function getseconds() {
    return secs - Math.round(1 * 10);
}
function stopTimer() {
    clearTimeout(OnClickTimerStop);
}
function restart() {
    if (player1Points === 5 || player2Points === 5) {
        setTimeout(function () {
            document.querySelector(".game-page").style.display = "none";
            document.querySelector(".timer-block").style.display = "none";
            document.getElementById("winner").style.display = "block";
            if (player1Points === 5) {
                document.getElementById("winner-name").innerHTML = playerUsername.value;
                document.querySelector(".lose-player-points").innerHTML = `${player2Name.innerHTML} lose by  ${5 - player2Score.innerHTML}`;
            }
            else {
                document.getElementById("winner-name").innerHTML = player2Name.innerHTML;
                document.querySelector(".lose-player-points").innerHTML = `${playerUsername.value} lose by  ${5 - player1Score.innerHTML}`;
            }
        }, 2000)
    }
    else {
        setTimeout(function () {
            document.querySelector(".start-timer").style.display = "block";
            document.querySelector(".timer").style.display = "none";
            leftIconOutput.style.display = "none";
            rightIconOutput.style.display = "none";
            outputPara.style.display = "none";
            winningPoints.style.display = "none";
            secs = 1 * 10;
        }, 2000)
    }
}
let tie = document.querySelector(".tie");
let player1Score = document.querySelector(".player1-score");
let player2Score = document.querySelector(".player2-score");
let outputPara = document.querySelector(".output-para");
let winningPoints = document.querySelector(".winner-name");
let tiePoints = 0;
let player1Points = 0;
let player2Points = 0;
function randomIcons() {
    leftIconOutput.style.display = "block";
    rightIconOutput.style.display = "block";
    outputPara.style.display = "block";
    winningPoints.style.display = "block";
    let randomIcon = Math.floor(Math.random() * 3 + 1);
    if (randomIcon === 1) {
        document.getElementById("randomOutput").src = "img/rock1.jpg";
    }

    if (randomIcon === 2) {
        document.getElementById("randomOutput").src = "img/paper1.jpg";
    }

    if (randomIcon === 3) {
        document.getElementById("randomOutput").src = "img/scissors1.png";
    }
    // tie
    if (playerChoice === randomIcon) {
        tiePoints += 1;
        tie.innerHTML = tiePoints;
        winningPoints.innerHTML = "Ops, Tie"
        outputPara.innerHTML = "Play again !";
    }
    // player1 wins
    else if (playerChoice === 1 && randomIcon === 3) {
        player1Points += 1;
        player1Score.innerHTML = player1Points;
        outputPara.innerHTML = "Rock beats Scissors ";
        winningPoints.innerHTML = `${playerUsername.value} got 1 point `;
    }
    else if (playerChoice === 3 && randomIcon === 2) {
        player1Points += 1;
        player1Score.innerHTML = player1Points;
        outputPara.innerHTML = "Scissors beats Paper";
        winningPoints.innerHTML = `${playerUsername.value} got 1 point `;
    }
    else if (playerChoice === 2 && randomIcon === 1) {
        player1Points += 1;
        player1Score.innerHTML = player1Points;
        outputPara.innerHTML = "Paper beats Rock";
        winningPoints.innerHTML = `${playerUsername.value} got 1 point `;
    }
    // player1 lose
    else if (playerChoice === 3 && randomIcon === 1) {
        player2Points += 1;
        player2Score.innerHTML = player2Points;
        outputPara.innerHTML = "Rock beats Scissors ";
        winningPoints.innerHTML = `${player2Name.innerHTML} got 1 point `;
    }
    else if (playerChoice === 2 && randomIcon === 3) {
        player2Points += 1;
        player2Score.innerHTML = player2Points;
        outputPara.innerHTML = "Scissors beats Paper";
        winningPoints.innerHTML = `${player2Name.innerHTML} got 1 point `;
    }
    else if (playerChoice === 1 && randomIcon === 2) {
        player2Points += 1;
        player2Score.innerHTML = player2Points;
        outputPara.innerHTML = "Paper beats Rock";
        winningPoints.innerHTML = `${player2Name.innerHTML} got 1 point `;
    }
}