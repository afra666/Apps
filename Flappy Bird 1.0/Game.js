//load canvas//load images
let canvas=document.getElementById("myCanvas");
let ctx=canvas.getContext("2d");
canvas.width=smartScale().gameW;
canvas.height=smartScale().gameH;
let gameW=canvas.width;
let gameH=canvas.height;

let imgBg=new Image();
let imgBird=[];
let imgCloud=new Image();
let imgGround=new Image();
let imgPipedown=new Image();
let imgPipeup=new Image();
let imgWelcome=new Image();
let mediaSwing=new Audio();
let mediaScore=new Audio();
//variables
let fno=0;
let score=0;
let t=0;
let alertFlag=0;
//1.bird;
let birdX=gameW*0.25;
let birdY=gameH*0.4;
let birdH=gameH*0.04;
let birdW=birdH*1.4;
// let birdSpeedDown=gameH*0.003;//vY
let birdSpeedDown=0;//vY
let birdSpeedUp=gameH*0.06;
let rdmNumB=Math.floor(Math.random()*3);
//2.bg
let bgX=0;
let bgY=0;
let bgW=gameW;
let bgH=gameH;
//3.cloud
let cloudX=0;
let cloudY=0;
let cloudW=gameW;
let cloudH=gameH*0.56;
//4.ground
let groundX=0;
let groundY=gameH*0.8;
let groundW=gameW;
let groundH=gameH*0.2;
//5.pipes
let pipeSpeed=1;
let creatNewAtX=gameW*0.3;
let pipeLen=gameH*0.7;
let pipeW=gameW*0.1;
let gap=birdH*5;
//first pipe
let pipeArr=[];
pipeArr[0]={
    pX0:gameW,
    pY0:-gameH*0.5
};
/*pY1:pipeArr[0].pY0+pipeLen+birdH*3*/
function loadData() {
    mediaScore.src="media/score.mp3";
    mediaSwing.src="media/swing.mp3";
    imgBg.src="img/bg.png";
    imgBird.src="img/bird0_0.png";
    imgCloud.src="img/cloud.png";
    imgGround.src="img/ground.png";
    imgPipedown.src="img/pipedown.png";
    imgPipeup.src="img/pipeup.png";
    imgWelcome.src="img/welcome.png";
    randomBirdColor();
    //start game
    imgBird[0].onload=function () {
        welcome();
    }
}
function welcome() {
    ctx.drawImage(imgBg,bgX,bgY,bgW,bgH);
    ctx.drawImage(imgCloud,cloudX,cloudY,cloudW,cloudH);
    ctx.drawImage(imgGround,groundX,groundY,groundW,groundH);
    ctx.drawImage(imgWelcome,0,0,gameW,gameH);
    ctx.fillText("Highest Score:"+score,10,30);

    let timer=setInterval(function () {
        ctx.drawImage(imgBird[fno%100%3],birdX,birdY,birdW,birdH);
        fno++;
        if (fno===1000) {
            fno=0;
        }
    },20);
    document.onclick=function () {
        mediaSwing.play();
        mediaScore.play();
        document.onclick=null;
        clearInterval(timer);
        ctx.clearRect(0,0,gameW,gameH);
        start();
        document.addEventListener("click",birdUp);
        document.addEventListener("keydown",birdUp);
    }
}
function start() {
    //bg+cloud   +pipe+bird

    drawBg();
    drawBird();
    drawPipe();
    drawGround();

    requestAnimationFrame(start);
}
function smartScale() {
    //ip5:[320*568],ip8P[414*736],ipX:[375*812]
    //cW[320-414],cH[568-812]
    let cW=document.documentElement.clientWidth;
    let cH=document.documentElement.clientHeight;
    if (cW<320) {
        cW=320;
    }else if(cW>414){
        cW=414;
    }
    if (cH<568) {
        cH=568;
    }else if(cH>812){
        cH=812
    }
    return {
        gameW:cW,
        gameH:cH
    }
}
function randomBirdColor() {
    for (let i = 0; i < 3; i++) {
        imgBird[i]=new Image();
    }
    switch (rdmNumB) {
        case 0:
            imgBird[0].src="img/bird0_0.png";
            imgBird[1].src="img/bird0_1.png";
            imgBird[2].src="img/bird0_2.png";
            break;
        case 1:
            imgBird[0].src="img/bird1_0.png";
            imgBird[1].src="img/bird1_1.png";
            imgBird[2].src="img/bird1_2.png";
            break;
        case 2:
            imgBird[0].src="img/bird2_0.png";
            imgBird[1].src="img/bird2_1.png";
            imgBird[2].src="img/bird2_2.png";
            break;
        default:
            break;
    }
}
function drawBg() {
    //final
    ctx.drawImage(imgBg,bgX,bgY,bgW,bgH);
    ctx.drawImage(imgCloud,cloudX,cloudY,cloudW,cloudH);
}
function drawPipe() {
    for (let i = 0; i < pipeArr.length; i++) {
        //for
        ctx.drawImage(imgPipeup,pipeArr[i].pX0,pipeArr[i].pY0,pipeW,pipeLen);
        ctx.drawImage(imgPipedown,pipeArr[i].pX0,pipeArr[i].pY0+pipeLen+gap,pipeW,pipeLen);
        console.log(pipeArr.length);
        if ( gameOverJudge(pipeArr[i]) ) {

           location.reload();

       };
        //new  rdmY属于区间[-300,0]
        if (pipeArr[i].pX0===200) {

            pipeArr.push({
                pX0:gameW,
                pY0:gameH*(-Math.random()*0.4),
            });

        }
        pipeArr[i].pX0-=pipeSpeed;
    }
    ctx.fillText("Highest Score:"+score,10,30);
}
function drawGround() {
    ctx.drawImage(imgGround,groundX,groundY,groundW,groundH);
}
function drawBird() {
    (++fno)===1000?fno:0;
    //for
    ctx.drawImage(imgBird[fno%300%3],birdX,birdY,birdW,birdH);
    birdY+=birdSpeedDown;
    t++;
    birdSpeedDown=(2*t+1)*0.1;
}
function birdUp() {
    t=0;
    mediaSwing.play();
    birdY-=birdSpeedUp;
}
function gameOverJudge(nowPipe) {
    let birdLeft=birdX;
    let birdRight=birdX+birdW;
    //修正值
    let birdHead=birdY+5;
    let birdFoot=birdY+birdH-5;

    let pipeUpLeft=nowPipe.pX0;
    let pipeUpRight=nowPipe.pX0+pipeW;
    let pipeUpFoot=nowPipe.pY0+pipeLen;
    let pipeDownLeft=pipeUpLeft;
    let pipeDownRight=pipeUpRight;
    let pipeDownHead=pipeUpFoot+gap;

    let groundHead=groundY;
    if (Math.floor(pipeUpRight)==Math.floor(birdRight)) {
        mediaScore.play();
        score+=10;
    }
    if(
        (birdFoot>groundHead+10)||
        ((birdRight>pipeUpLeft&&birdLeft<pipeUpRight)&&(birdHead<pipeUpFoot||birdFoot>pipeDownHead))
            ){
        alertFlag++;
        if (alertFlag===1) {
            alert("Game Over\nYour score is :"+score);
        }
        return true;
    }else {
        return false;
    }

}

