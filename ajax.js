/*
 * 手写原生ajax
 * */

var xhr = null;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) { //IE5 IE6使用ActiveXObject
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

if (xhr != null) {
  //监听回调
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300 )|| xhr.status == 304) {
        console.log(xhr.responseText);
      } else {
        console.log('request fail' + xhr.status);
      }
    }
  }

  //请求参数   true表示异步 false为同步，同步的话必须的等onreadystatechange改变的时候 
  //才往下才执行
  xhr.open("get", "/test.html", true);
  //如果想要设置hender的话 必须在open之后，send之前设置 setRequestHeader()
  xhr.send();
}
