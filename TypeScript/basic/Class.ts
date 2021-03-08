// 类
class Person {
  name:String;
  age:number;

  constructor(name:String, age:number) {
    this.name = name;
    this.age = age;
  }

  getName():String {
    return this.name;
  }

  setName(name:String):void {
    this.name = name;
  }
}

// 类继承 extends super
class Man extends Person {
  constructor(name:String, age:number) {
    super(name,age)
  }
}

let man = new Man('Tuzx', 18)
console.log(man.getName());

// 类的修饰符
// public protected private
// 默认是public

// 类的静态
class Car {
  static cName:String = 'ss'
  constructor() {
    
  }
  static print():String {
    return `${this.cName}车`
  }
}

// 多态
class Animal {
  constructor() {
    
  }

  eat():void {
    console.log('Animal eat');
  }
}

class Cat extends Animal {
  eat():void {
    console.log('Cat eat');
  }
}

class Dog extends Animal {
  eat():void {
    console.log('Dog eat');
  }
}

function animalEat(a:Animal):void {
  a.eat();
}

let d:Dog = new Dog();
let c:Cat = new Cat();


animalEat(d);
animalEat(c);

// 抽象 abstract
abstract class Study {
  subject:String;

  constructor(subject:String) {
    this.subject = subject;
  }

  abstract study():void;
}

class studyMath extends Study{
  constructor(subject:String) {
    super(subject)
  }

  study():void {
    console.log('Study Math');
  }
}