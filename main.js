const bg = document.getElementById("bg");
const mainBtns = document.getElementById("mainMenu");
const returnBtn = document.getElementById("return");
const racs = document.getElementById("racs");
const racA = document.getElementById("racA");
const racB = document.getElementById("racB");
const racC = document.getElementById("racC");
const chooseBtns = document.getElementById("choose");
const stage = document.getElementById("stage")


var score = 0;

function showStage(stagenum){
    bg.style.backgroundImage = "url(Images/stage_bg.png)";
    mainBtns.style.display = "none";
    stage.style.display = "flex";

    var stageTag = stage.getElementsByTagName("h3")[0];
    var scoreTag = stage.getElementsByTagName("p")[0];

    stageTag.innerText = "Stage " + stagenum;
    scoreTag.innerText = "Score : " + score;
    stagenum += 1;

    setTimeout(showGame, 3000);
}

function showGame(){
    bg.style.backgroundImage = "url(Images/game_bg.png)";
    returnBtn.style.display = "flex";
    racs.style.display = "flex";
    chooseBtns.style.display = "flex";
    stage.style.display = "none";

    var timer = 0;
    function frame(){
        racmove = requestAnimationFrame(frame);
        timer++;
        if(timer%120==0){
            racA.src = 'Images/SitRaccoon.png';
            racB.src = 'Images/SitRaccoon.png';
            racC.src = 'Images/SitRaccoon.png';
        }
        else if(timer%60==0){
            racA.src = 'Images/SleepRaccoon.png';
            racB.src = 'Images/SleepRaccoon.png';
            racC.src = 'Images/SleepRaccoon.png';
        }
    }

    frame()

}

function showHow(){
    bg.style.backgroundImage = "url(Images/intro_bg.png)";
    mainBtns.style.display = "none";
    returnBtn.style.display = "flex";
    returnBtn.style.alignContent = "flex-end";
}

function showRank(){
    bg.style.backgroundImage = "url(Images/rank_bg.png)";
    mainBtns.style.display = "none";
    returnBtn.style.display = "flex";
    returnBtn.style.alignContent = "flex-start";
}


function showMenu(){
    bg.style.backgroundImage = "url(Images/menu_bg.png)";
    mainBtns.style.display = "flex";
    returnBtn.style.display = "none";
    racs.style.display = "none";
    chooseBtns.style.display = "none";
    cancelAnimationFrame(racmove);
}

