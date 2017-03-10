//正则表达式
/**
 * () 括号可以当成一直集合 表示需要集体匹配
 * [^a-z] 不要a-z
 * ()|() 表示或的关系
 * 
 * 
 */

//邮箱匹配

var t = /^((\w)|(\w[\w\.]*\w))@\w+\.\w{2,3}(\.\w{2,3})?$/.test('fu.tt.tt.xx@qq.com.cn');
console.log(t)
var t = /^((\w)|(\w[\w\.]*\w))@\w+\.\w{2,3}(\.\w{2,3})?$/.test('.fu.tt.tt.xx@qq.com.cn');
console.log(t);

'fu.tt.tt.xx@qq.com.cn'.replace(/\w+/, function(match, p1, p2) {
  console.log(match);
  console.log(p1);
  console.log(p2);
});





/**
 * replace函数讲解
 */

//第一个参数可以直接是字符串或者正则表达式






