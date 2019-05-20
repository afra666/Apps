 let rTemp=new R();
function Block(locX,locY,typeInBlockRdm) {
    let smartScale=new SmartScale();
    this.x=locX;
    this.y=locY;
    this.w=smartScale.w/4;
    this.h=smartScale.h*0.03;
    this.typeImg=new Image();
    let self=this;
    (function init() {
        switch (typeInBlockRdm) {
            case 666:
                self.typeImg= rTemp.block_01;
                break;
            case 0:
                if (Math.random()*6>4.2) {
                   self.typeImg= rTemp.block_01;
                }
                break;
            case 1:
                if (Math.random()*6>4.2) {
                    self.typeImg= rTemp.block_02;
                }
                break;
            case 2:
                if (Math.random()*6>4.2) {
                    self.typeImg= rTemp.block_03;
                }
                break;
            case 3:
                if (Math.random()*6>4.2) {
                    self.typeImg= rTemp.block_04;
                }
                break;

            default:
                self.typeImg= rTemp.block_01;
                break;
        }})();
    this.drawMe=function () {
        ctx.drawImage(this.typeImg,this.x,this.y,this.w,this.h);

    };
    this.update=function () {
        this.y-=speedBlock;
    }
}
