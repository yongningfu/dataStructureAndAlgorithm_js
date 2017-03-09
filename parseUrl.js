var parseUrl = function(url) {

  var searchString = url.substr(url.lastIndexOf('?') + 1);
  var ret = {};
  var reg = /([^?&=]+)=([^?&=]+)/g;

  //decodeURL 不对参数进行解码 即它不对 ? = &等进行解码
  // ?=&等 需要用 decordURIComponent进行解码
  searchString.replace(reg, function(match, p1, p2) {
    var name = decodeURIComponent(p1);
    var value = decodeURIComponent(p2);
    ret[name] = value;
    return match;
  });
  return ret;
}

console.log(encodeURI("http://www.com?你好=哈哈&他们=哈哈"));
console.log(parseUrl('http://www.com?%E4%BD%A0%E5%A5%BD=%E5%93%88%E5%93%88&%E4%BB%96%E4%BB%AC=%E5%93%88%E5%93%88'));
