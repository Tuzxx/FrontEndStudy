// interface 接口
// 提供数据规范
// 冒号前加?表示可选
interface chineseName {
  readonly firstName:String, // 只允许在创建时赋值
  lastName?:String
}

function printName(name:chineseName):void {
  console.log(name);
}

printName({
  firstName:'Tu',
})

// 函数类型接口
interface interFuc {
  // 括号里为参数，括号外为返回值
  (name:String, age:number):void
}

let testFuc:interFuc = function (name:String, age:number):void {
  console.log("test");
}

// 可索引接口
// 数组
interface arrNumber {
  [index:number]:number
}

let arr:arrNumber = [1,2,3]

// 对象
interface stringObj {
  [index:string]:string
}

let obj:stringObj = {
  ss:'ss',
  aa:'11'
}

// 接口类
interface Bag {
  brand:string
  size:number

  pickBag():void;
}

// 实现接口
class BackPack implements Bag {
  brand:string
  size:number

  constructor(brand:string, size:number) {
    this.brand = brand;
    this.size = size;
  }

  pickBag():void {
    console.log("背包");
  }
}

// 接口拓展
interface Trunk extends Bag {
  printTrunk():void;
}

class SmallTrunk implements Trunk {
  brand:string
  size:number

  constructor(brand:string, size:number) {
    this.brand = brand;
    this.size = size;
  }

  pickBag():void {
    console.log(this.brand);
  }

  printTrunk():void {
    
  }
}