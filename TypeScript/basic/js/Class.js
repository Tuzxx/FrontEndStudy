"use strict";
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
// 类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
// 类继承 extends super
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age) {
        return _super.call(this, name, age) || this;
    }
    return Man;
}(Person));
var man = new Man('Tuzx', 18);
console.log(man.getName());
// 类的修饰符
// public protected private
// 默认是public
// 类的静态
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.print = function () {
        return this.cName + "\u8F66";
    };
    Car.cName = 'ss';
    return Car;
}());
// 多态
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('Animal eat');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log('Cat eat');
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        console.log('Dog eat');
    };
    return Dog;
}(Animal));
function animalEat(a) {
    a.eat();
}
var d = new Dog();
var c = new Cat();
animalEat(d);
animalEat(c);
// 抽象 abstract
var Study = /** @class */ (function () {
    function Study(subject) {
        this.subject = subject;
    }
    return Study;
}());
var studyMath = /** @class */ (function (_super) {
    __extends(studyMath, _super);
    function studyMath(subject) {
        return _super.call(this, subject) || this;
    }
    studyMath.prototype.study = function () {
        console.log('Study Math');
    };
    return studyMath;
}(Study));
