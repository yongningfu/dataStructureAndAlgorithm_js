//深度复制 可以任何类型都可以
var deepClone = function(variable) {
    // 用来记录，当前递归栈中 正在进行深度复制的对象
    var stack = [];
    function innerDeepClone(variable) {
        if (typeof variable === 'object') {
            var ret;
            if (Array.isArray(variable)) {
                ret = [];
                variable.forEach(ele => ret.push(innerDeepClone(ele)));
            } else {
                ret = {};
                var value;
                // 记录当前递归栈复制对象
                stack.push(variable);
                for (var key in variable) {
                    if (variable.hasOwnProperty(key)) {
                        value = variable[key];
                        // 当前递归栈中， 没有复制这个函数
                        if (stack.indexOf(value) < 0) {
                            ret[key] = innerDeepClone(value);
                        } else {
                            // 自定义处理
                            ret[key] = {};
                        }
                    }
                }
                // 当前函数执行完成后，必须出栈
                stack.pop();
            }
            return ret;
        } else {
            return variable;
        }
    }
    return innerDeepClone(variable);
}

console.log(deepClone({aa: 11, bb: 22}));
console.log(deepClone([1, 2, 3]));
console.log(deepClone(1));
var tt1 = {aa: [1, 2, 3, {bb: [1, 2]}]};
var tt2 = deepClone(tt1);

tt1.aa[3].bb[1] = 100;
console.log(tt1.aa);
console.log(tt2.aa);

// 相互引用的情况

var aa = { name: 'aa' };
var bb = { name: 'bb' };
var cc = { name: 'cc' };
bb.aa = aa;
bb.cc = cc;
aa.cc = cc;
aa.bb = bb;
cc.aa = aa;
cc.bb = bb;

var variable = {aa, bb, cc};
console.log(JSON.stringify(deepClone(variable)));


