

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
let score=1;
let xFlag=false;
//life
let life=3;
let layer=1;
let lifeFlag=0;
//btn
let btnW=gameW*0.2;
let btnH=btnW;
//let r
let r=new R();
//block
let b=new Block(gameW/4,gameH*0.99,666);
let blockArr=[];
let speedBlock=0;
let cntBlockTime=0;
let flagDel=false;
//hero
let hero=new Hero();
//fno
let fno=0;

function Main() {
    life=3;

    r.welcome.onload=function(){
        ctx.drawImage(r.welcome,0,0,gameW,gameH);
        ctx.drawImage(r.click,gameW*0.5,0);
        drawCtx2();
    };
    window.onclick=function () {
        window.onclick=null;
        ctrl();
        run();
    };
}
function ctrl() {
    window.onclick=function () {
        if (event.clientX<gameW/2) {
            hero.dir=-1;
            hero.x+=hero.dir*10;
        }else if((event.clientX>gameW/2)&&(event.clientX<gameW)){
            hero.dir=1;
            hero.x+=hero.dir*10;
        }
    };
    blockArr[0]=new Block(2,0);
}
function drawTop() {
    ctx.drawImage(r.blockTop,0,0,gameW,gameH*0.03);
}
function run() {
        fno++;
        clearAll();
        blackAll();
        drawTop();
    ctx2.clearRect(0,0,ctx2W,ctx2H);
    drawLife();
    hero.drawRunningMe();
    drawBlockArr();

drawBtn();//last
    if (hero.y>gameH||hero.y<0) {
        life=-1;
    }
    if (life<0) {
        life=0;
        if (xFlag==false) {
                        xFlag=true;
            alert("Game Over \n要加油了!\n 你进入了"+score+"层")
        }
        location.reload();


    }
requestAnimationFrame(run);
}
function drawBlockArr() {
    //循环画图block
    for (let i = 0; i < blockArr.length; i++) {
        blockArr[i].drawMe();
        blockArr[i].y--;
        if (hit( blockArr[i])) {

            hero.y=blockArr[i].y-hero.h;

            if (blockArr[i].imgType.src===r.block_03.src) {
                blockArr[i].h=10;
                hero.y-=hero.h*0.5;
            }
            if (blockArr[i].imgType.src===r.block_04.src) {
                    life-=0.02;
                    console.log(life);

            }
            //放最下面
            if (blockArr[i].imgType.src===r.block_02.src) {
                blockArr.splice(i,1);
            }

        }else{

        }
    }
    drawCtx2();
    hero.y+=3;
    //150fno  push4个block
    if (fno%150===0) {
        push4Blocks();
        score++;
    }
}
function hit(objBlock) {
    let x1=hero.x+hero.w;
    let y1=hero.y+hero.h;
    let w1=hero.w;
    let h1=hero.h;
    let x2=objBlock.x;
    let y2=objBlock.y;
    let w2=objBlock.w;
    let h2=objBlock.h;

    if (
        (Math.abs((x1-w1*0.5)-(x2+w2*0.5))<=(w1+w2)/2)
        &&((Math.abs((y1-h1*0.5)-(y2+h2*0.5))<=(h1+h2)/2))
    ) {


        return true;
    } else {
        return false;
    }
}
function push4Blocks() {
    //>1.2就push
    if (Math.random()*2>1.2) {

        blockArr.push(new Block(0,Math.random()*4));
    }
    if (Math.random()*2>1.2) {

        blockArr.push(new Block(1,Math.random()*4));
    }
    if (Math.random()*2>1.2) {

        blockArr.push(new Block(2,Math.random()*4));
    }
    if (Math.random()*2>1.2) {

        blockArr.push(new Block(3,Math.random()*4));
    }


}
function clearAll() {
    ctx.clearRect(0,0,gameW,gameH);
}
function blackAll() {
    ctx.fillStyle="black";
    ctx.fillRect(0,0,gameW,gameH);
}
function drawBtn() {
    ctx.drawImage(r.arrow_01,gameW*0.2,gameH*0.82,btnW,btnH);
    ctx.drawImage(r.arrow_02,gameW*0.5,gameH*0.82,btnW,btnH);
}
function drawCtx2() {

    ctx2.drawImage(r.ctx2Bg,0,0,ctx2W,ctx2H);
    ctx2.fillStyle="cyan";
    ctx2.font="40px Arial";
    ctx2.fillText(""+score,ctx2W*0.6,ctx2H*0.82);
}
function drawLife() {
    ctx2.fillStyle="red"
    //[0.24,0.30,0.36,0.42]-=0.06
    // 0     1     2     3

    switch (Math.floor(life)) {
        case 0:ctx2.fillRect(0,0,ctx2W*0.24,ctx2H);
            break;
        case 1:ctx2.fillRect(0,0,ctx2W*0.30,ctx2H);
            break;
        case 2:ctx2.fillRect(0,0,ctx2W*0.36,ctx2H);
            break;
        case 3:ctx2.fillRect(0,0,ctx2W*0.42,ctx2H);
            break;
        default:ctx2.fillRect(0,0,0,ctx2H);
            break;
    }
}

Main();
