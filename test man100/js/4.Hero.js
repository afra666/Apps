
function Hero() {
    let smartScale=new SmartScale();
    let rHero=new R();
    this.x=100;
    this.y=100;
    this.w=smartScale.w*0.08;
    this.h=this.w*1.8;
    let speed=5;
    this.left=true;
    this.right=false;
    let cntHero=0;

    let imgArr=[];
imgArr.push(rHero.man_01);
imgArr.push(rHero.man_02);
imgArr.push(rHero.man_03);
imgArr.push(rHero.man_04);
imgArr.push(rHero.man_05);
imgArr.push(rHero.man_06);
imgArr.push(rHero.man_07);
imgArr.push(rHero.man_08);
    let imgNow=imgArr[3];
    let self=this;
    this.drawStaticMe=function () {
        ctx.drawImage(imgNow,this.x,this.y,this.w,this.h);
    };
    this.drawRunningMe=function () {
        if (self.left) {
            self.right=false;
            imgNow=imgArr[cntHero+4];
            ctx.drawImage(imgNow,this.x,this.y,self.w,self.h);
        }
        if(self.right){
            self.left=false;
            imgNow=imgArr[cntHero];
            ctx.drawImage(imgNow,this.x,this.y,self.w,self.h);
        }
        if (cntHero++===3) {
            cntHero=0;
        }
    };
    this.move=function () {
        document.onmousemove=function() {

            let midX=smartScale.w/2;
            let newX=event.clientX;
            if ((newX<gameW)&&(newX<midX)) {
                speed=-5;

                privateGoLeft();
            }
            if ((newX<gameW)&&(newX>midX)) {
                speed=5;

                privateGoRight();
            }
        };
        document.onkeydown=function() {
            if (event.keyCode===37) {
                speed=-5;
                clearInterval(timerR);
                privateGoLeft();
            }
            if (event.keyCode===39) {
                speed=5;
                clearInterval(timerL);
                privateGoRight();
            }
        };
        document.onkeyup=function () {
            speed=0;
        }
        document.onmouseup=function () {
            speed=0;
        }
    };
    let timerL=null;
    let timerR=null;
    function privateGoLeft() {
               hero.left = true;
                hero.right = false;
                hero.x += speed;

    }
    function privateGoRight() {

                hero.left=false;
                hero.right=true;
                hero.x+=speed;
           
    }
    let i=true;
    let retObj=null;
    function getStaticObj(n) {
        if (i) {
            i=false;
            retObj=n;
            return retObj ;
        }else {
            return retObj ;
        }
    }
}
