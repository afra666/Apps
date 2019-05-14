// 3/3.继承拖拽
function LimitDrag(id) {
    // 将子函数this即LimitDrag继承父函数Drag
    Drag.call(this,id);
}
// 为了防止引用,所以使用for单个赋值
for (let i in Drag.prototype){
    LimitDrag.prototype[i]=Drag.prototype[i];
}


// 重写并覆盖父类中的move方法
LimitDrag.prototype.move=function() {
    // 平移小位置距离
    let l=event.clientX-this.disX;
    let t=event.clientY-this.disY;
    if (l<0) {
             l=0;       
    }else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth){
        l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
    }
    console.log(l);
    this.oDiv.style.left=l+"px";
    this.oDiv.style.top=t+"px";
    this.oDiv.style.background="#"+Math.floor(Math.random() * 16777216).toString(16);
}