//深度复制 可以任何类型都可以
var deepClone = function(obj) {
    //去除null和不是obj的情况
    if (typeof (obj) !== 'object' || obj === null) return obj;
    var result;
    if (Array.isArray(obj)) result = [];
    else result = {};
    for (var key in obj) {
        //解决循环引用 todo
        //不对继承复制
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);;
        }
    }
    return result;
}

console.log(deepClone({aa: 11, bb: 22}));
console.log(deepClone([1, 2, 3]));
console.log(deepClone(1));
var tt1 = {aa: [1, 2, 3, {bb: [1, 2]}]};
var tt2 = deepClone(tt1);

tt1.aa[3].bb[1] = 100;
console.log(tt1.aa);
console.log(tt2.aa);