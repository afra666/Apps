function Hero() {
    let smartScale=new SmartScale();
    let rHero=new R();
    this.x=smartScale.w*0.65;
    this.y=smartScale.h*0.8;
    this.w=smartScale.w*0.08;
    this.h=this.w*1.8;
    this.speedY=-1;
    this.dir=1;
    this.heroT0=0;
    this.a=1;
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

    this.centerX=this.x+this.w/2;
    this.centerY=this.y+this.h/2;
    this.left=this.x;
    this.right=this.x+this.w;
    this.head=this.y;
    this.foot=this.y+this.h;

    let self=this;
    let cnt=0;
    this.drawRunningMe=function () {


        if (self.dir===1) {
            cnt++;
            ctx.drawImage(imgArr[Math.floor(cnt/10)%3],self.x,self.y,self.w,self.h);
        }
        if (self.dir===-1) {
            cnt++;
            ctx.drawImage(imgArr[Math.floor(cnt/10)%3+4],self.x,self.y,self.w,self.h);
        }
    };
    this.drawStaticMe=function () {

    };
}
