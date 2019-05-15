function Game(canvasObj) {

    Game.prototype.gameW=function (){
        //min[320*568]
        //max[414*736]
        document.documentElement.clientHeight
        if ( document.documentElement.clientWidth <320) {
            return 320;
        }else if( document.documentElement.clientWidth >414){
            return 414;
        }else{
            return  document.documentElement.clientWidth ;
        }
    };
    Game.prototype.gameH=function(){
        if ( document.documentElement.clientHeight<568) {
            return 568;
        }else if( document.documentElement.clientHeight>736){
            return 736;
        }else {
            return  document.documentElement.clientHeight;
        }
    }
    Game.prototype.cvs=canvasObj;
    Game.prototype.ctx=this.cvs.getContext("2d");
    Game.prototype.img= {
        bg_day: "img/bg_day.png",
        bg_night: "img/bg_night.png",
        bird0_0: "img/bird0_0.png",
        bird0_1: "img/bird0_1.png",
        bird0_2: "img/bird0_2.png",
        bird1_0: "img/bird1_0.png",
        bird1_1: "img/bird1_1.png",
        bird1_2: "img/bird1_2.png",
        bird2_0: "img/bird2_0.png",
        bird2_1: "img/bird2_1.png",
        bird2_2: "img/bird2_2.png",
        brick: "img/brick.png",
        endscore: "img/endscore.png",
        knight: "img/knight.png",
        pipedown: "img/pipedown.png",
        pipeup: "img/pipeup.png",
        start: "img/start.png",
        cloud: "img/cloud.png"
    };
    Game.prototype.dataInit=function(){
        console.log("Starting game...");
        console.log("Loading images...");
        console.log(this.img.bg_day);
        console.log("gameW="+this.gameW());
        console.log("gameH="+this.gameH());
        this.cvs.width=this.gameW();
        this.cvs.height=this.gameH();
    };
    Game.prototype.start=function () {
    this.dataInit();
    let bg=new Background(this);
    bg.drawMe();
    };
}
