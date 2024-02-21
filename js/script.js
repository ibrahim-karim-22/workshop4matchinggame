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
const theInfoButton = document.querySelector('#infoButton');
const theInfoSentence = document.querySelector('.info');
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
let currentLevel = 2;
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
theAttDisplay.style.color = "white";
timerSpan.style.display = "none";
thePar.style.display = "none";
timerSpan.style.color = 'blue';
theInfoSentence.style.display = 'none';


function startGame(difficulty) {
  if (gameHasStarted) {
    return;
  }
  resetGame()
  theAttDisplay.textContent = 'level: 1';
  timerSpan.style.color = 'blue';
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
  currentLevel = 2;
  theLeftSide.innerHTML = "";
  theRightSide.innerHTML = "";
  clearInterval(timer);
  timerSpan.innerHTML = 60;
}

function mainMenuPress() {
  resetGame();
  theGameArea.style.display = "none";
  theStartBtnContainer.style.display = "block";
  theInfoBtnContainer.style.display = "block";
  theButtonsBg.style.display = "block";
  theMenuBtnContainer.style.display = "none";
  theGameOverScreen.style.display = "none";
  theAttemptsContainer.style.display = "none";
  timerSpan.style.display = "none";
  thePar.style.display = "none";
  theInfoSentence.style.display = 'none';
  theEasyBtn.style.display = "block";
  theMediumBtn.style.display = "block";
  theHardBtn.style.display = "block";
  theGoodLuckBtn.style.display = "block";
}
function infoPage() {
  theGameArea.style.display = "none";
  theStartBtnContainer.style.display = "none";
  theInfoBtnContainer.style.display = "none";
  theButtonsBg.style.display = "none";
  theAttemptsContainer.style.display = "none";
  timerSpan.style.display = "none";
  thePar.style.display = "none";
  theMenuBtnContainer.style.display = "block";
  theEasyBtn.style.display = "none";
  theMediumBtn.style.display = "none";
  theHardBtn.style.display = "none";
  theGoodLuckBtn.style.display = "none";
  theInfoBtnContainer.style.display = "none";
  theInfoSentence.style.display = "block";
}

function generateFaces(difficulty) {
  if (!gameHasStarted) {
    return;
  }

  switch (difficulty) {
    case "easy":
      numberOfFaces = 2;
      imageUrls = ["https://i.giphy.com/JLGhqNoi9xsnS.webp", "https://i.giphy.com/2VVvpkyyym5FOrHQG3.webp"]
      break;
    case "medium":
      numberOfFaces = 5;
      imageUrls = ["https://i.giphy.com/pUjFF6SVlR5OeKEqCY.webp", "https://i.giphy.com/dQx8nzM8Z1EJXbBqk3.webp", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxrdWllZ25oYjhzcnRubW56Y3dreWQ2cHI2YjJ4aDM0emF0aXYyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/p94nK1krMpGIkJYYJv/giphy.gif",
        "https://i.giphy.com/d2Sor6kd4bug3J3Srk.webp", "https://i.giphy.com/2VVvpkyyym5FOrHQG3.webp"]
      break;
    case "hard":
      numberOfFaces = 8;
      imageUrls = ["https://i.giphy.com/T6oln8tuKfrrE7Wh47.webp",
        "https://i.giphy.com/l46Cpss7mfcEftf56.webp", "https://i.giphy.com/2VVvpkyyym5FOrHQG3.webp", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdxb2RrcTB6bXdmeWNwdHBmZjhhOWd2eDFiNDhwdWllZHRyN3BqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AoFwZ9cx7FcWY/giphy.gif",
        "https://i.giphy.com/llxTZC250AVby0Xdan.webp", "https://i.giphy.com/C0Rvn1BlqQQgM.webp", "https://i.giphy.com/llxTZC250AVby0Xdan.webp",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdxb2RrcTB6bXdmeWNwdHBmZjhhOWd2eDFiNDhwdWllZHRyN3BqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AoFwZ9cx7FcWY/giphy.gif"]
      break;
    case "goodLuck":
      numberOfFaces = 10;
      imageUrls = ["https://i.giphy.com/JLGhqNoi9xsnS.webp", "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2tjZnhtYWZxbjhhc3kycWk5YnBiYW9iM2lkOXoweWUxN2hwZGRzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SHgA5d6Aoqp7OJXdCC/giphy.gif",
        "https://i.giphy.com/T6oln8tuKfrrE7Wh47.webp", "https://i.giphy.com/pUjFF6SVlR5OeKEqCY.webp", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxrdWllZ25oYjhzcnRubW56Y3dreWQ2cHI2YjJ4aDM0emF0aXYyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/p94nK1krMpGIkJYYJv/giphy.gif",
        "https://i.giphy.com/l46Cpss7mfcEftf56.webp", "https://i.giphy.com/2VVvpkyyym5FOrHQG3.webp", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdxb2RrcTB6bXdmeWNwdHBmZjhhOWd2eDFiNDhwdWllZHRyN3BqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AoFwZ9cx7FcWY/giphy.gif",
        "https://i.giphy.com/dQx8nzM8Z1EJXbBqk3.webp", "https://i.giphy.com/llxTZC250AVby0Xdan.webp", "https://i.giphy.com/C0Rvn1BlqQQgM.webp", "https://i.giphy.com/d2Sor6kd4bug3J3Srk.webp",]
      break;
    default:
      console.error('invalid');
      return;
  }
  for (let i = 0; i < imageUrls.length; i++) {
    console.log("Image URL " + i + ": " + imageUrls[i]);
  }
  // Clear the left and right sides before generating new faces
  numberOfFaces *= currentLevel;
  theLeftSide.innerHTML = "";
  theRightSide.innerHTML = "";
  console.log('left: ' + theLeftSide.innerHTML + 'right: ' + theRightSide.innerHTML);
  for (let i = 0; i < numberOfFaces; i++) {
    face = document.createElement("img");
    face.src = imageUrls[i % imageUrls.length];
    face.style.width = "59px";
    randomTop = Math.floor(Math.random() * 400) + 1;
    randomLeft = Math.floor(Math.random() * 400) + 1;
    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";
    face.title = "Image ";
    theLeftSide.appendChild(face);
  }
  extraImage = document.createElement("img");
  extraImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  extraImage.src = extraImageUrl;
  extraImage.style.width = "59px";
  randomExtraTop = Math.floor(Math.random() * 400) + 1;
  randomExtraLeft = Math.floor(Math.random() * 400) + 1;
  extraImage.style.top = randomExtraTop + "px";
  extraImage.style.left = randomExtraLeft + "px";
  theLeftSide.appendChild(extraImage);

  leftImgCopy = theLeftSide.cloneNode(true);
  leftImgCopy.removeChild(leftImgCopy.lastChild);
  theRightSide.appendChild(leftImgCopy);

  extraImageClickListener = function (event) {
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
  currentLevel++;
  generateFaces(difficulty);
  countAttempts();
  timeLeft += 5;
  timerSpan.style.color = 'green';
  timerSpan.textContent = timeLeft + '+++++';
  timerSpan.style.fontSize = '40px';
  timerSpan.style.position = 'absolute';
  timerSpan.style.top = '0';
  setTimeout(function () {
    timeLeft.style.left = '44px'
  }, 2000);

  setTimeout(function () {
    timerSpan.style.color = 'blue';
  }, 2000);
  setTimeout(function () {
    theAttDisplay.style.color = 'green';
  }, 1000);


  setTimeout(function () {
    theAttDisplay.style.color = 'white';
  }, 2000);
}

function countAttempts() {
  if (!gameHasStarted) {
    return;
  }
  const currentAttempt = parseInt(theAttDisplay.textContent.split(": ")[1], 10) || 0;
  const newAttempt = currentAttempt + 1;
  theAttDisplay.textContent = 'Level: ' + newAttempt;
}

function gameOver() {
  if (!gameHasStarted) {
    return;
  }
  resetGame();
  theGameArea.style.display = "none";
  theStartBtnContainer.style.display = "none";
  theButtonsBg.style.display = "none";
  theAttemptsContainer.style.display = "none";
  timerSpan.style.display = "none";
  thePar.style.display = "none";
  theMenuBtnContainer.style.display = "block";
  theGameOverScreen.style.display = "block";
  if (theAttDisplay.innerHTML === '1') {
    theGameOverMessage.innerHTML = userName + " Try Again!"
  } else {
    theGameOverMessage.innerHTML = userName + " You Reached " + theAttDisplay.textContent;
  }
  gameHasStarted = false;
  theMenuBtnContainer.addEventListener("click", mainMenuPress);
  document.body.removeEventListener("click", gameOver);
  if (theLeftSide.lastChild) {
    theLeftSide.lastChild.removeEventListener("click", nextLevel);
  }
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft = timeLeft - 1;
    timerSpan.innerHTML = timeLeft;
  } else {
    gameOver();
    resetGame();
  }
  if (timeLeft < 21) {
    timerSpan.style.color = "red";
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
document.querySelector('#infoButton').addEventListener("click", infoPage)