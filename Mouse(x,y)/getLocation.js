window.onload=function () {
    let oDiv=document.getElementById("div1");
    oDiv.innerHTML="Mouse(x,y)";
    let get=function () {

        let x=event.clientX;
        let y=event.clientY;
        oDiv.innerHTML="Mouse("+x+","+y+")";
    };
    document.onclick=function () {
        get();
    }
}
