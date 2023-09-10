const bg = document.getElementById("bg");
const mainBtns = document.getElementById("mainMenu");
const returnBtn = document.getElementById("return");
const racs = document.getElementById("racs");
const racA = document.getElementById("racA");
const racB = document.getElementById("racB");
const racC = document.getElementById("racC");
const chooseBtns = document.getElementById("choose");
const pointLabels = document.getElementById("point");
const stage = document.getElementById("stage");


var score = 0;
var stageNum = 0;
var moveCnt = 0;
let stageMove = [[],[],[]];
let stageCnt = [0, 0, 0];

function showStage(){
    bg.style.backgroundImage = "url(Images/stage_bg.png)";
    mainBtns.style.display = "none";
    stage.style.display = "flex";
    racs.style.display = "none";
    chooseBtns.style.display = "none";
    pointLabels.style.display = "none";
    stageMove = [[],[],[]];
    stageCnt = [0, 0, 0];
    stageNum += 1
    var stageTag = stage.getElementsByTagName("h3")[0];
    var scoreTag = stage.getElementsByTagName("p")[0];
    stageTag.innerText = "Stage " + stageNum;
    scoreTag.innerText = "Score : " + score;
    const stageAudio = new Audio("Sounds/Stage.mp3");
    stageAudio.play();
    setTimeout(showGame, 7000);
}

function showGame(){
    bg.style.backgroundImage = "url(Images/game_bg.png)";
    racs.style.display = "flex";
    chooseBtns.style.display = "flex";
    chooseBtns.style.visibility = "hidden";
    pointLabels.style.display = "flex";
    pointLabels.style.visibility = "hidden";
    stage.style.display = "none";

    makeGame()
}   

function makeGame(){
    moveCnt = stageNum**2 + 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < moveCnt; j++){
            if (stageNum<6){
                var randNum = Math.floor(Math.random()*2);
            }
            else{
                var randNum = Math.floor(Math.random()*3);
            }
            if(randNum==0){
                stageMove[i].push("Sit");
                stageCnt[i] += 0;
            }
            else if(randNum==1){
                stageMove[i].push("Sleep");
                stageCnt[i] += 1;
            }
            else{
                stageMove[i].push("Eat");
                stageCnt[i] += 2;
            }
        }
    }
    const readyAudio = new Audio("Sounds/Ready.mp3");
    readyAudio.play();
    setTimeout(startGame, 6000)
}

function startGame(){
    const eatAudio = new Audio("Sounds/Eat.mp3");
    const sleepAudio = new Audio("Sounds/Snore.mp3");
    let timer = 0;
    let move = 0;
    function frame(){
        racmove = requestAnimationFrame(frame);
        timer++;
        if(timer%120==0){
            racA.src = "Images/SitRaccoon.png";
            racB.src = "Images/SitRaccoon.png";
            racC.src = "Images/SitRaccoon.png";
            move += 1;
        }
        else if(timer%60==0){
            if(stageMove[0][move]=="Eat"||stageMove[1][move]=="Eat"||stageMove[2][move]=="Eat"){
                eatAudio.play();
            }
            if(stageMove[0][move]=="Sleep"||stageMove[1][move]=="Sleep"||stageMove[2][move]=="Sleep"){
                sleepAudio.play();
            }
            racA.src = `Images/${stageMove[0][move]}Raccoon.png`;
            racB.src = `Images/${stageMove[1][move]}Raccoon.png`;
            racC.src = `Images/${stageMove[2][move]}Raccoon.png`;
        }
        if(moveCnt*120==timer){
            chooseBtns.style.visibility = "visible";
            cancelAnimationFrame(racmove);
        }
    }
    frame()    
}

function chooseAnswer(racNum){
    chooseBtns.style.visibility = "hidden";
    const answerAudio = new Audio("Sounds/Answer.mp3");
    answerAudio.play();


    setTimeout(()=>showAnswer(racNum), 6000);
}

function showAnswer(racNum){
    var stageCntpTags = pointLabels.getElementsByTagName("p");
    for(let i = 0; i < 3; i++){
        stageCntpTags[i].innerText = stageCnt[i];
    }
    pointLabels.style.visibility = "visible";
    
    if(stageCnt[racNum]==Math.max(...stageCnt)){
        const correctAudio = new Audio("Sounds/Correct.mp3");
        correctAudio.play();
        setTimeout(showStage, 3000);
    }
    else{
        const wrongAudio = new Audio("Sounds/Wrong.wav");
        wrongAudio.play();
        setTimeout(gameOver, 3000);
    }
}

function gameOver(){
    bg.style.backgroundImage = "url(Images/over_bg.png)";
    racs.style.display = "none";
    pointLabels.style.display = "none";
    const overAudio = new Audio("Sounds/GameOver.mp3");
    overAudio.play();

    setTimeout(showMenu, 7000);
}

function showHow(){
    bg.style.backgroundImage = "url(Images/intro_bg.png)";
    mainBtns.style.display = "none";
    returnBtn.style.display = "flex";
    returnBtn.style.float = "right";
}

function showRank(){
    bg.style.backgroundImage = "url(Images/rank_bg.png)";
    mainBtns.style.display = "none";
    returnBtn.style.display = "flex";
    returnBtn.style.float = "left";
}


function showMenu(){
    bg.style.backgroundImage = "url(Images/menu_bg.png)";
    mainBtns.style.display = "flex";
    returnBtn.style.display = "none";
    racs.style.display = "none";
    chooseBtns.style.display = "none";
    stageNum = 0;
}

