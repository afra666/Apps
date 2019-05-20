

//game canvas
let c=$("gameCanvas");
let ctx=c.getContext("2d");
let smartScale=new SmartScale();
let gameW=c.width=smartScale.w;
let gameH=c.height=smartScale.h*0.95;
let gameCanvasTop=c.style.top=smartScale.h*0.05+"px";
//score canvas//wel
let c2=$("infoCanvas");
let ctx2=c2.getContext("2d");
let ctx2W=c2.width=gameW;
let ctx2H=c2.height=smartScale.h*0.05;
//life
let life=3;
let layer=1;
//let r
let r=new R();
//block
let b=new Block(gameW/4,gameH*0.99,666);
let blockArr=[];
let speedBlock=1;
let cntBlockTime=0;
//hero
let hero=new Hero();

function Main() {
    r.welcome.onload=function(){
        ctx.drawImage(r.welcome,0,0,gameW,gameH);
        ctx.drawImage(r.click,gameW*0.5,0);
        drawCtx2();
    };
    document.onclick=function () {
        document.onclick=null;
        push4Blocks(666);
        run();
    };
    document.onkeydown=function () {
        if (event.keyCode==37) {
            document.onkeydown=null;
            push4Blocks(666);
            run();
        }
    }
}

function run() {
    clearAll();
    blackAll();
    drawTop();
    drawLife();
    drawCtx2();
    hero.move();
    hero.drawRunningMe();
    for (let i = 0; i < blockArr.length; i++) {
        blockArr[i].drawMe();
        blockArr[i].update();

        // console.log(blockArr.length);
    }
    cntBlockTime++;
    if (cntBlockTime*speedBlock%(Math.floor(gameH*0.15))===0) {
        push4Blocks();
    }
    requestAnimationFrame(run);

}

function drawTop() {
    ctx.drawImage(r.blockTop,0,0,gameW,gameH*0.03);
}
function push4Blocks(isStart) {
    if (isStart!=666) {
        //[0-3]共四种类型blocks
        blockArr.push(new Block(0,gameH*0.99,Math.floor(Math.random()*4)));
        blockArr.push(new Block(b.w,gameH*0.99,Math.floor(Math.random()*4)));
        blockArr.push(new Block(b.w*2,gameH*0.99,Math.floor(Math.random()*4)));
        blockArr.push(new Block(b.w*3,gameH*0.99,Math.floor(Math.random()*4)));
    }
    else {
        blockArr.push(new Block(0,gameH*0.99,Math.floor(Math.random()*4)));
        blockArr.push(new Block(b.w,gameH*0.99,Math.floor(Math.random()*4)));
        blockArr.push(new Block(b.w*2,gameH*0.99,666));
        blockArr.push(new Block(b.w*3,gameH*0.99,Math.floor(Math.random()*4)));
    }
}
function clearAll() {
    ctx.clearRect(0,0,gameW,gameH);
}
function blackAll() {
    ctx.fillStyle="black";
    ctx.fillRect(0,0,gameW,gameH);
}

function drawCtx2() {

    ctx2.drawImage(r.ctx2Bg,0,0,ctx2W,ctx2H);
    ctx2.fillStyle="cyan";
    ctx2.font="40px Arial";
    ctx2.fillText(layer+"",ctx2W*0.6,ctx2H*0.82);
}
function drawLife() {
    ctx2.fillStyle="red"
    //[0.24,0.30,0.36,0.42]-=0.06
    // 0     1     2     3

    switch (life) {
        case 0:ctx2.fillRect(0,0,ctx2W*0.24,ctx2H);
            break;
        case 1:ctx2.fillRect(0,0,ctx2W*0.30,ctx2H);
            break;
        case 2:ctx2.fillRect(0,0,ctx2W*0.36,ctx2H);
            break;
        case 3:ctx2.fillRect(0,0,ctx2W*0.42,ctx2H);
            break;
        default:
            break;
    }
}
Main();