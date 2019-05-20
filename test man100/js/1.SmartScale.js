function SmartScale() {
    this.w=calc().gmW;
    this.h=calc().gmH;
    function calc() {
        //ip5:[320*568],ip8P[414*736],ipX:[375*812]
        //thisCanvasWidthIs[320-414],thisCanvasHeightIs[568-812]
        let thisCanvasWidthIs=document.documentElement.clientWidth;
        let thisCanvasHeightIs=document.documentElement.clientHeight;
        if (thisCanvasWidthIs<320) {
            thisCanvasWidthIs=320;
        }else if(thisCanvasWidthIs>414){
            thisCanvasWidthIs=414;
        }
        if (thisCanvasHeightIs<568) {
            thisCanvasHeightIs=568;
        }else if(thisCanvasHeightIs>812){
            thisCanvasHeightIs=812
        }
        return {
            gmW:thisCanvasWidthIs,
            gmH:thisCanvasHeightIs
        }
    }
}