 let rTemp=new R();
function Block(colOn,typeInBlockRdm) {
    let smartScale=new SmartScale();
    this.w=smartScale.w/4;
    this.h=smartScale.h*0.03;
    this.x=colOn*(smartScale.w/4);
    this.y=smartScale.h-this.h*4;
    this.imgType=new Image();
    this.show=false;
    this.speedY=1;

    this.centerX=this.x+this.w/2;
    this.centerY=this.y+this.h/2;
    this.left=this.x;
    this.right=this.x+this.w;
    this.head=this.y;
    this.foot=this.y+this.h;
    let self=this;
    (function init() {
        switch (Math.floor(typeInBlockRdm)) {
            case 0:
                self.imgType= rTemp.block_01;
                break;
            case 1:
                self.imgType= rTemp.block_02;
                break;
            case 2:
               self.imgType= rTemp.block_03;
                break;
            case 3:
                self.imgType= rTemp.block_04;
                break;
            default:
                break;
        }})();

    this.drawMe=function () {
        this.speedY++;
        ctx.drawImage(self.imgType,this.x,this.y,this.w,this.h);
    };

}
