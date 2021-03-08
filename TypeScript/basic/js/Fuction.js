"use strict";
// ES5定义方法
function test1() {
}
var test2 = function () {
};
// TypeScript 定义方法
function test3() {
    return "Test";
}
var test4 = function () {
};
// 传参数
// 形参后面加？，表示可选
// 可选参数必须在最后
// 默认参数也是可选参数
function print(name, age) {
    if (name === void 0) { name = 'Tuzx'; }
    return "name:" + name + "  age:" + age;
}
console.log(print());
// 剩余参数
function sumNum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
console.log(sumNum(1, 2, 3, 4, 5, 6, 7, 8, 9));
function printOverload(x) {
    if (typeof x === 'string') {
        return "name: " + x;
    }
    else {
        return "number: " + x;
    }
}
console.log(printOverload('Tuzx'));
console.log(printOverload(18));
