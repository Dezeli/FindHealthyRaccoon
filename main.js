const bg = document.getElementById("bg");
const mainBtns = document.getElementById("mainMenu");
const returnBtn = document.getElementById("return");
const howCont = document.getElementById("how");
const racs = document.getElementById("racs");
const chooseBtns = document.getElementById("choose");
const racA = document.getElementById("racA");
const racB = document.getElementById("racB");
const racC = document.getElementById("racC");

function showGame(){
    bg.style.backgroundImage = "url(Images/game_bg.png)";
    mainBtns.style.display = "none";
    returnBtn.style.display = "flex";
    racs.style.display = "flex";
    chooseBtns.style.display = "flex";

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
    howCont.style.display = "block";
    returnBtn.style.display = "flex";
}

function showRank(){
    bg.style.backgroundImage = "url(Images/rank_bg.png)";
    mainBtns.style.display = "none";
    returnBtn.style.display = "flex";
}


function showMenu(){
    bg.style.backgroundImage = "url(Images/menu_bg.png)";
    mainBtns.style.display = "flex";
    returnBtn.style.display = "none";
    howCont.style.display = "none";
    racs.style.display = "none";
    chooseBtns.style.display = "none";
    cancelAnimationFrame(racmove);
}

