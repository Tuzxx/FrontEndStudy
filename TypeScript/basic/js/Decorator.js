"use strict";
// Decorator 装饰器
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 普通装饰器
function log(params) {
    console.log(params);
    params.prototype.info = 'Test';
}
var printlog = /** @class */ (function () {
    function printlog() {
    }
    printlog = __decorate([
        log
    ], printlog);
    return printlog;
}());
var pl = new printlog();
console.log(pl.info);
// 装饰器工厂(可传参)
function log1(params) {
    return function (target) {
        target.prototype.info = params;
    };
}
var printlog1 = /** @class */ (function () {
    function printlog1() {
    }
    printlog1 = __decorate([
        log1("Test2")
    ], printlog1);
    return printlog1;
}());
var pl1 = new printlog1();
console.log(pl1.info);
// 类装饰器修改类构造器
function log2(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.info = "装饰器";
            return _this;
        }
        return class_1;
    }(target));
}
var printlog2 = /** @class */ (function () {
    function printlog2() {
        this.info = "类构造器";
    }
    printlog2 = __decorate([
        log2
    ], printlog2);
    return printlog2;
}());
var pl2 = new printlog2();
console.log(pl2.info);
// 属性装饰器
function logProperty(params) {
    return function (target, attr) {
        target[attr] = params;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    __decorate([
        logProperty('www.tuzx.com')
    ], HttpClient.prototype, "logUrl", void 0);
    return HttpClient;
}());
var httpClient = new HttpClient();
console.log(httpClient.logUrl);
