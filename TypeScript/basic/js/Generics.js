"use strict";
// Generics 泛型
// 使参数 返回值类型保持一致的同时
// 可以接收不同类型的数据
// 泛型类
var TuList = /** @class */ (function () {
    function TuList() {
        this.list = [];
    }
    TuList.prototype.add = function (value) {
        this.list.push(value);
    };
    TuList.prototype.findMin = function () {
        var min = this.list[0];
        this.list.forEach(function (element) {
            if (element < min) {
                min = element;
            }
        });
        return min;
    };
    return TuList;
}());
var printS = function (value) {
    return value;
};
console.log(printS(123));
