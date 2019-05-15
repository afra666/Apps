function Background(gameObj) {
    Background.prototype.game=gameObj;
    console.log("Background Success");
    console.log(this.game.gameW()+" "+this.game.gameH());

}
Background.prototype.drawMe=function(){
    let self=this;
    console.log("Success");
    let bgImg1=new Image();
    bgImg1.src=this.game.img.bg_day;
    console.log(bgImg1);
    bgImg1.onload=function () {
        self.game.ctx.drawImage(bgImg1,0,0,self.game.cvs.width,self.game.cvs.height);
    }
};
