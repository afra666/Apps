function ajax(url,fnSuc,fnFail) {

        //1.创建Ajax,http请求
        let oAjax=new XMLHttpRequest();

        //2.连接服务器,open(方法,文件名,异步传输:true)
        oAjax.open('GET',url+"?t="+new Date().getTime(),true)

        //3.send发送请求
        oAjax.send();

        //4.接收返回
        oAjax.onreadystatechange=function () {

            //响应解析已完成oAjax.readyState==4
            //读取完成
            if (oAjax.readyState==4) {

                if (oAjax.status==200) {

                    fnSuc(oAjax.responseText);
                    // alert("OK:"+oAjax.responseText);
                }else {
                    alert("FAILED,"+oAjax.status);
                    if (fnFail) {

                        fnFail(oAjax.status);

                    }
                }
            }
        }
}