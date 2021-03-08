"use strict";
function printName(name) {
    console.log(name);
}
printName({
    firstName: 'Tu',
});
var testFuc = function (name, age) {
    console.log("test");
};
var arr = [1, 2, 3];
var obj = {
    ss: 'ss',
    aa: '11'
};
// 实现接口
var BackPack = /** @class */ (function () {
    function BackPack(brand, size) {
        this.brand = brand;
        this.size = size;
    }
    BackPack.prototype.pickBag = function () {
        console.log("背包");
    };
    return BackPack;
}());
var SmallTrunk = /** @class */ (function () {
    function SmallTrunk(brand, size) {
        this.brand = brand;
        this.size = size;
    }
    SmallTrunk.prototype.pickBag = function () {
        console.log(this.brand);
    };
    SmallTrunk.prototype.printTrunk = function () {
    };
    return SmallTrunk;
}());
