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
 * 基本知识点:
 */

/**
 *  \b为元字符 代表的意义为 它的前一个字符，后一个字符不全是\w(即都不是或者只有一个)
 *  一般用来匹配单词分割 比如匹配某个单词word 那么使用 \bword\b
 *  假如匹配是hi后面不远处跟着一个Lucy，你应该用\bhi\b.*\bLucy\b。
 */

var reg = /\bhi\b\.*\bLucy\b/;
console.log(reg.test(' hi...Lucy'));

/**
 * 注意:
 * 
 * .是另一个元字符，匹配除了换行符以外的任意字符
 * \s匹配任意的空白符，包括空格，制表符(Tab)，换行符，中文全角空格等
 * \w匹配字母或数字或下划线等。
 */

var w_Reg = /\w{3}/;
console.log(w_Reg.test('a__'));
console.log(/\ba\w*\b/.test('a___aa'));

/**
 * 需要转义的元字符有 . / * + ? ( ) |
 * 
 * []里面 有些元字符是可以不用转义
 * [.?!]匹配标点符号(.或?或!)。
 */
console.log('.?!+-*', /[.?!+-]{5}/.test('.?!+-'));


/**
 * 分支条件 | 从左向右匹配 匹配其 左边全部 或者 右边全部
 * 
 */

console.log('|', /aaa-aaa|bbb-bbb/.test('aaa-aaa'));
console.log('|', /aaa-aaa|bbb-bbb/.test('aaa'));
console.log('|', /aaa-aaa|bbb-bbb/.test('bbb-bbb'));
console.log('|', /\d{5}|ttt-ttt/.test('ttt-tt'));  //false

/**
 * 分组 重复一串字符串 () (abb)+ 等
 */



//test


//1. 配置数字大小从 0 到 255
/**
 * 注意思路 只有0-9范围才能转为 \d
 * 这种匹配的思路在于
 * 200-255 2后面的数字时限制的 100-199 1后面的数字没有限制 1-99 个位数有限制  特殊0
 */

var regM255 = /^25[0-5]$|^2[0-4]\d$|^1\d{2}$|^[1-9]\d?$|^0$/

console.log(regM255.test('256'));
console.log(regM255.test('102'));
console.log(regM255.test('5'));

/**
 * 反向引用（一般是对分组的反向引用）
 * 
 * () 小括号为一个个分组的标准，从左往于 分别为 1  2  3 ... 等等
 */
var regReference = /(aa(bb))cc(dd(ee))___\2/
console.log(regReference.test('aabbccddee___bb')); //bb在第二个括号内 所以引用2

var regReference = /(aa(bb))cc(dd(ee))___\1/
console.log(regReference.test('aabbccddee___aabbtt')); //aabb在第一个括号内 所以引用1

var regReference = /(aa(bb))cc(dd(ee))___\4/
console.log(regReference.test('aabbccddee___ee')); //ee在第四个括号内 所以引用4

/**
 * 位置指定
 * 
 * 有用查找在某些内容之前 或者之后的东西
 * (?=exp) 匹配以exp后缀结尾的字符串 不包括exp
 * (?>=exp) 匹配以exp前缀结尾的字符串 不包括exp
 * 
 * (?=exp)一定放在正则最后 (?<=exp)一定放在正则最前 不然可能包莫名奇妙的错误
 */

var str = 'aa tt aaaTTTa bbTTT'.match(/\b\w+(?=TTT\b)/g);
console.log(str);

//上面是匹配，但是我们只是想确保某些字符在 前面或者后面没有出现，不行进行匹配，那该如何呢？

/**
 * (?!exp) 后面不能是exp
 * (?<!exp)前面不能是exp  
 * 
 * 注意和 (?=exp) 区别 (?=exp)是用于匹配 匹配后面为exp
*/

// 注意: js不支持 负位置指定







/**
 * replace函数讲解
 */

/**
 * 第一个参数可以直接是字符串或者正则表达式，
 * 第二个参数为 函数 或者 字符串
 */

String.prototype.trim2 = function() {
  console.log(this);
  return this.replace(/^\s*(.*)\s*$/, function(match, $1) {
    return $1;
  });
}

console.log('  aa  '.trim2());











