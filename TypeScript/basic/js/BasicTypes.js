"use strict";
// Boolean类型
var b = true;
console.log(b);
// Number类型
var n = 100;
console.log(n);
// String类型
var s = "Hello World";
console.log(s);
// Array类型(数组)
// 第一种定义方式
var arrN1 = [1, 2, 3, 4, 5];
console.log(arrN1);
var arrS1 = ['Hello', 'World'];
console.log(arrS1);
// 第二种定义方式 
var arrN2 = [1, 3, 5, 7, 9];
console.log(arrN2);
var arrS2 = ['Hi', 'World'];
console.log(arrS2);
// Tuple类型(元组)
var tup = ['123', 123, false];
console.log(tup);
// Enum类型(枚举)
// 若不赋值，则默认赋值下标数
var Gender;
(function (Gender) {
    Gender[Gender["man"] = 1] = "man";
    Gender[Gender["woman"] = 0] = "woman";
})(Gender || (Gender = {}));
console.log(Gender.man, Gender.woman);
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["failed"] = 0] = "failed";
})(Flag || (Flag = {}));
var flag = 1;
console.log(flag);
// Any类型
var a = 123;
a = 'test';
console.log(a);
// 用处
var odiv = document.getElementById('test');
console.log(odiv);
// Null & Undefined 类型
// 是所有类型的子类型
var nu = null;
var und = undefined;
// 多类型
var mulNum;
// Void类型
// 无返回值
function print() {
}
// Never类型
// 任何类型的子类型
// 表示的是那些永不存在的值的类型
