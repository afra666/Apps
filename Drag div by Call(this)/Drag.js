// 2/3.Drag.js
Drag.prototype.move=function() {
    // 平移小位置距离
    this.oDiv.style.left=event.clientX-this.disX+"px";
    this.oDiv.style.top=event.clientY-this.disY+"px";
    this.oDiv.style.background="#"+Math.floor(Math.random() * 16777216).toString(16);


}
Drag.prototype.up=function () {
    document.onmousemove=null;
    document.onmouseup=null;
}
Drag.prototype.down=function(ev) {
    let _this=this;
    this.disX=event.clientX-this.oDiv.offsetLeft;
    this.disY=event.clientY-this.oDiv.offsetTop;
    document.onmousemove=function(){

        _this.move(ev);
        document.onmouseup=function(){
            _this.up(ev);
        }
    }

}
function Drag(id) {
    let _this=this;
    this.disX=0;
    this.disY=0;
    this.oDiv=document.getElementById(id);

    // 错误写法 oDiv.onmousedown=down();
    this.oDiv.onmousedown=function (ev) {
        _this.down(ev);

        // 防止文字选中
        return false;
    }
}