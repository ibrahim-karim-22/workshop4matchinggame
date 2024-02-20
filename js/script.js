const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");
const theGameArea = document.querySelector("#gameArea");
const theAttDisplay = document.querySelector("#attDisplay");
const theAttemptsContainer = document.querySelector(".attemptsContainer");
const theStartBtnContainer = document.querySelector(".startBtnContainer");
const theEasyBtn = document.querySelector("#easyButton");
const theMediumBtn = document.querySelector("#mediumButton");
const theHardBtn = document.querySelector("#hardButton");
const theGoodLuckBtn = document.querySelector("#goodLuckButton");
const theSettingsBtnContainer = document.querySelector(".settingsBtnContainer");
const theInfoBtnContainer = document.querySelector(".infoBtnContainer");
const theMenuBtnContainer = document.querySelector(".menuBtnContainer");
const theButtonsBg = document.querySelector(".buttonsBg");
const timerSpan = document.querySelector("#timer");
const theGameOverScreen = document.querySelector("#gameOverScreen")
const theGameOverImage = document.querySelector(".theGameOverImage");
const theGameOverMessage = document.querySelector(".gameOverMessage");
const theScoreBoard = document.querySelector(".scoreBoard");
const thePar = document.querySelector(".par1");

let timer;
let timeLeft = 60;
let userName;
let numberOfFaces;
let face;
let randomTop;
let randomBottom;
let gameHasStarted = false;
let leftImgsCopy;
let currentLevel = 1;
let extraImage;
let extraImageUrl;
let randomExtraTop;
let randomExtraLeft;
let extraImageClickListener;
let imageUrls;
let leftImgCopy;
let previousExtraImage = null;
let faceLocker;

theGameArea.style.display = "none";
theMenuBtnContainer.style.display = "none";
theGameOverScreen.style.display = "none";
theAttemptsContainer.style.display = "none";
timerSpan.style.display = "none";
thePar.style.display = "none";

function startGame(difficulty) {
  if (gameHasStarted) {
    return;
  }
  resetGame()
  theAttDisplay.textContent = '1';
  gameHasStarted = true;
  userName = prompt('Enter Name:');
  console.log(userName);
  clearInterval(timer);
  generateFaces(difficulty);
  timeLeft = 60;
  timerSpan.innerHTML = timeLeft;
  timer = setInterval(updateTimer, 1000);
  theGameArea.style.display = "block";
  theAttemptsContainer.style.display = "block";
  timerSpan.style.display = "block";
  thePar.style.display = "block";
  theStartBtnContainer.style.display = "none";
  theInfoBtnContainer.style.display = "none";
  theButtonsBg.style.display = "none";
  theMenuBtnContainer.style.display = "block";
  theEasyBtn.style.display = "none";
  theMediumBtn.style.display = "none";
  theHardBtn.style.display = "none";
  theGoodLuckBtn.style.display = "none";
}

function resetGame() {
  gameHasStarted = false;
  // numberOfFaces = 5;
  //theAttDisplay.textContent = '1';
  theLeftSide.innerHTML = "";
  theRightSide.innerHTML = "";
  clearInterval(timer);
  timerSpan.innerHTML = 60;
}

function mainMenuPress() {
  resetGame();
  theGameArea.style.display = "none";
  theStartBtnContainer.style.display = "block";
  //theSettingsBtnContainer.style.display = "block";
  theInfoBtnContainer.style.display = "block";
  theButtonsBg.style.display = "block";
  theMenuBtnContainer.style.display = "none";
  theGameOverScreen.style.display = "none";
  theAttemptsContainer.style.display = "none";
  timerSpan.style.display = "none";
  thePar.style.display = "none";
  theEasyBtn.style.display = "block";
  theMediumBtn.style.display = "block";
  theHardBtn.style.display = "block";
  theGoodLuckBtn.style.display = "block";
  //  generateFaces();
}

function generateFaces(difficulty) {
  if (!gameHasStarted) {
    return;
  }
  
  switch (difficulty) {
    case "easy":
      numberOfFaces = 2;
      imageUrls = ["https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG9haXAyMWVma2hxZTd0cHA5M3o4NDBxbmc1azVrdnJsa2lic3F5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JLGhqNoi9xsnS/giphy.gif",
        "https://media0.giphy.com/media/2oWVpPXfTBvdYbFu9G/giphy.gif?cid=ecf05e47izbicum9s05fqnl8p98f84t92c12gqnhwndn0vv0&ep=v1_gifs_related&rid=giphy.gif&ct=s"]
      break;
    case "medium":
      numberOfFaces = 5;
      imageUrls = ["https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG9haXAyMWVma2hxZTd0cHA5M3o4NDBxbmc1azVrdnJsa2lic3F5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JLGhqNoi9xsnS/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZxdHBvN29vdG4zeDRoYTl5ZXViazR3MWd1dm12dWRpaHA1Mmt3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2VVvpkyyym5FOrHQG3/giphy.gif",
        "https://media0.giphy.com/media/p94nK1krMpGIkJYYJv/giphy.gif?cid=ecf05e47t6ywjjanrok2r8504p2f2yn0hiedwxxnzd90w1kn&ep=v1_gifs_related&rid=giphy.gif&ct=s",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExam9uZWM4N2o3dzBvazd2dnF1ZDd6MndwcGlvbHlzenA3Y290bm1nbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/C0Rvn1BlqQQgM/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjI5aTg0ejN4cGhwbnp0dWF4amRkbjhzeXYweDIwNzVmeXNtbGM3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wAs2ha84kWkOu8x1A6/giphy.gif"
      ]
      break;
    case "hard":
      numberOfFaces = 8;
      imageUrls = ["https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG9haXAyMWVma2hxZTd0cHA5M3o4NDBxbmc1azVrdnJsa2lic3F5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JLGhqNoi9xsnS/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZxdHBvN29vdG4zeDRoYTl5ZXViazR3MWd1dm12dWRpaHA1Mmt3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2VVvpkyyym5FOrHQG3/giphy.gif",
        "https://media0.giphy.com/media/p94nK1krMpGIkJYYJv/giphy.gif?cid=ecf05e47t6ywjjanrok2r8504p2f2yn0hiedwxxnzd90w1kn&ep=v1_gifs_related&rid=giphy.gif&ct=s",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3hydDR0cWNwNmZzZWwxenh1NXY4NG5wZTJjcHhqMDc1ajR1aGpidiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/d2Sor6kd4bug3J3Srk/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExam9uZWM4N2o3dzBvazd2dnF1ZDd6MndwcGlvbHlzenA3Y290bm1nbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/C0Rvn1BlqQQgM/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHR0Y3h6c3o5bGp2djBhdGFvcjZpczBnNnlvaWQ3a2lwZDZnZHFqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MxYQrB9jeGzza/giphy.gif",
        "https://media4.giphy.com/media/T8yNFdUIRs2Hu/giphy.gif?cid=ecf05e47c3p1kmcxot2i5ookm2d2ymz777a6km2byzx8kgqi&ep=v1_gifs_related&rid=giphy.gif&ct=s",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjI5aTg0ejN4cGhwbnp0dWF4amRkbjhzeXYweDIwNzVmeXNtbGM3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wAs2ha84kWkOu8x1A6/giphy.gif"
      ]
      break;
    case "goodLuck":
      numberOfFaces = 10;
      imageUrls = ["https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG9haXAyMWVma2hxZTd0cHA5M3o4NDBxbmc1azVrdnJsa2lic3F5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JLGhqNoi9xsnS/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZxdHBvN29vdG4zeDRoYTl5ZXViazR3MWd1dm12dWRpaHA1Mmt3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2VVvpkyyym5FOrHQG3/giphy.gif",
        "https://media0.giphy.com/media/p94nK1krMpGIkJYYJv/giphy.gif?cid=ecf05e47t6ywjjanrok2r8504p2f2yn0hiedwxxnzd90w1kn&ep=v1_gifs_related&rid=giphy.gif&ct=s",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3hydDR0cWNwNmZzZWwxenh1NXY4NG5wZTJjcHhqMDc1ajR1aGpidiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/d2Sor6kd4bug3J3Srk/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExam9uZWM4N2o3dzBvazd2dnF1ZDd6MndwcGlvbHlzenA3Y290bm1nbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/C0Rvn1BlqQQgM/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmgwdG5jeHVrN2I4MXhiemlpd3J6cnJjZTdoa2pzNmlwa3F0ZnRiMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/llxTZC250AVby0Xdan/giphy.gif",
        "https://media4.giphy.com/media/dQx8nzM8Z1EJXbBqk3/giphy.gif?cid=ecf05e47vfk5dsleq6xczqac6edtrmsvtu0k6japrl6un12g&ep=v1_gifs_related&rid=giphy.gif&ct=s",
        "https://media0.giphy.com/media/SHgA5d6Aoqp7OJXdCC/giphy.gif?cid=ecf05e47vfk5dsleq6xczqac6edtrmsvtu0k6japrl6un12g&ep=v1_gifs_related&rid=giphy.gif&ct=s",
        "https://media4.giphy.com/media/27bTZsLdvsCFMDaVQ6/giphy.gif?cid=ecf05e47nq2s3e07igzv5q8qfvvu3suwxorq5et8uqjehook&ep=v1_gifs_related&rid=giphy.gif&ct=s",
        "https://media0.giphy.com/media/2oWVpPXfTBvdYbFu9G/giphy.gif?cid=ecf05e47izbicum9s05fqnl8p98f84t92c12gqnhwndn0vv0&ep=v1_gifs_related&rid=giphy.gif&ct=s",
      ]
      break;
    default:
      console.error('invalid');
      return;
  }
  
    // Clear the left and right sides before generating new faces
    numberOfFaces += currentLevel;
    theLeftSide.innerHTML = "";
    theRightSide.innerHTML = "";
    console.log('left: ' + theLeftSide.innerHTML + 'right: ' + theRightSide.innerHTML);
  for (let i = 0; i < numberOfFaces; i++) {
    face = document.createElement("img");
    face.src = imageUrls[i];
    face.style.width = "77px";
    randomTop = Math.floor(Math.random() * 400) + 1;
    randomLeft = Math.floor(Math.random() * 400) + 1;
    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";
    theLeftSide.appendChild(face);
  }
    extraImage = document.createElement("img");
    extraImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    extraImage.src = extraImageUrl;
    extraImage.style.width = "77px";
    randomExtraTop = Math.floor(Math.random() * 400) + 1;
    randomExtraLeft = Math.floor(Math.random() * 400) + 1;
    extraImage.style.top = randomExtraTop + "px";
    extraImage.style.left = randomExtraLeft + "px";
    theLeftSide.appendChild(extraImage);
    
    leftImgCopy = theLeftSide.cloneNode(true);
   leftImgCopy.removeChild(leftImgCopy.lastChild); 
    theRightSide.appendChild(leftImgCopy);

      extraImageClickListener = function(event) {
        nextLevel(event, difficulty);
    };
    if (previousExtraImage) {
        previousExtraImage.removeEventListener("click", extraImageClickListener);
    }
    extraImage.addEventListener("click", extraImageClickListener);
    previousExtraImage = extraImage;
    
}

function nextLevel(event, difficulty) {
  if (!gameHasStarted) {
      return;
  }
  event.stopPropagation();
  currentLevel++; // Increment the current level
  generateFaces(difficulty);
  countAttempts();
}

function countAttempts() {
  if (!gameHasStarted) {
    return;
  }
  const currentAttempt = parseInt(theAttDisplay.textContent, 10) || 0;
  const newAttempt = currentAttempt + 1;
  theAttDisplay.textContent = newAttempt;
}

function gameOver() {
  if (!gameHasStarted) {
    return;
  }
  resetGame();
  theGameArea.style.display = "none";
  theStartBtnContainer.style.display = "none";
  theInfoBtnContainer.style.display = "none";
  theButtonsBg.style.display = "none";
  theAttemptsContainer.style.display = "none";
  timerSpan.style.display = "none";
  thePar.style.display = "none";
  theMenuBtnContainer.style.display = "block";
  theGameOverScreen.style.display = "block";
  theGameOverMessage.innerHTML = userName + " YOU HAVE REACHED " + theAttDisplay.textContent + " LEVELS!"
  gameHasStarted = false;
  theMenuBtnContainer.addEventListener("click", mainMenuPress);
  document.body.removeEventListener("click", gameOver);
  if(theLeftSide.lastChild){
  theLeftSide.lastChild.removeEventListener("click", nextLevel);
}}

///timer///
function updateTimer() {
  if (timeLeft > 0) {
    timeLeft = timeLeft - 1;
    timerSpan.innerHTML = timeLeft;
  } else {
    gameOver();
    resetGame();
  }
}

document.querySelector("#easyButton").addEventListener("click", function () {
    startGame("easy");
  });
  document.querySelector("#mediumButton").addEventListener("click", function () {
    startGame("medium");
  });
  document.querySelector("#hardButton").addEventListener("click", function () {
    startGame("hard");
  });
  document.querySelector("#goodLuckButton").addEventListener("click", function () {
    startGame("goodLuck");
  });
  document.querySelector("#gameArea").addEventListener("click", gameOver);
  document.querySelector("#menuButton").addEventListener("click", mainMenuPress);