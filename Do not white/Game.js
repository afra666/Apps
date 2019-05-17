let gameW=document.documentElement.clientWidth-1;
let gameH=document.documentElement.clientHeight-1;
let c=document.getElementById("gameCanvas");
let ctx=c.getContext("2d");
let score=0;
//boxes
let y0=-(1/3)*gameH;
let bW=(1/3)*gameW;
let bH=(1/3)*gameH;
let boxArr=[];

let speed=5;
let timer=null;
let gameOver=false;
//midi
let m=new Audio();
m.src="bgMusic.mp3";
function start() {
    loadData();
    welcome();


}
function run() {
    if (score>0&&(score%100)===0) {
        speed++;
        score+=10;
    }
    ctx.clearRect(0, 0, gameW, gameH);
    for (let i = 0; i < boxArr.length; i++) {
        if ((boxArr[boxArr.length - 9].y + bH > gameH) && (boxArr[boxArr.length - 6].y + bH < gameH)) {
            boxArr.push({
                x: 0,
                y: -bH,
                color: Math.floor(Math.random() * 1.5) === 0 ? "white" : "black"
            });
            boxArr.push({
                x: bW,
                y: -bH,
                color: Math.floor(Math.random() *1.5) === 0 ? "white" : "black"
            });
            boxArr.push({
                x: bW*2,
                y: -bH,
                color: Math.floor(Math.random() *1.5) === 0 ? "white" : "black"
            });
            console.log(boxArr.length);
        }
            ctx.fillStyle = boxArr[i].color;
            ctx.fillRect(boxArr[i].x, boxArr[i].y, bW, bH);
            boxArr[i].y += speed;

    }
    showScore();
    requestAnimationFrame(run);
}
    function showScore() {
        ctx.fillStyle = "cyan";
        ctx.font="20px Arial";
        ctx.fillText("<别点白块> 当前得分:" + score+"当前等级:"+(Math.floor(score/100)+1), gameW / 2.5, gameH * 0.05);

    }

    function loadData() {


        m.loop=true;
        c.width = gameW;
        c.height = gameH;
        c.style.border = "1px solid cyan"
        let line = 0;
        let col = 0;


        for (let line = 2; line >= 0; line--) {
            for (let col = 0; col < 3; col++) {
                boxArr.push(
                    {
                        x: col * bW,
                        y: line * bH,
                        color: Math.floor(Math.random() *1.5) === 0 ? "white" : "black"
                    }
                );
            }
        }
    }

function welcome() {

    for (let i = 0; i < boxArr.length; i++) {
        ctx.fillStyle = boxArr[i].color;
        ctx.fillRect(boxArr[i].x, boxArr[i].y, bW, bH);
    }
    ctx.font="50px Arial";
    ctx.fillStyle="cyan";
    ctx.fillText("点击屏幕,开始游戏",gameW/3,gameH/2);
    showScore();
    document.onclick=function () {
        m.play();
        run();
        document.onclick=null;
        document.onclick=function () {
            killBox();
        }
    }
}
function killBox() {
    let msX=event.clientX;
    let msY=event.clientY;
    for (let i = 0; i < boxArr.length; i++) {
        //i.x<x<i.x+bW
        if (((boxArr[i].x<msX&&boxArr[i].x+bW>msX)&&(boxArr[i].y<msY&&boxArr[i].y+bH>msY))) {
            if (boxArr[i].color==="black") {
                boxArr[i].color="white";
                score+=10;
            }else {
                gameOver=true;
                alert("游戏结束\n最高得分:"+score);
                location.reload();
            }
        }
    }
}

