// ES5定义方法
function test1() {

}

let test2 = function() {

}

// TypeScript 定义方法
function test3():String {
  return "Test";
}

let test4 = function():void {

}

// 传参数
// 形参后面加？，表示可选
// 可选参数必须在最后
// 默认参数也是可选参数
function print(name:String='Tuzx', age?:Number):String {
  return `name:${name}  age:${age}`
}
console.log(print());

// 剩余参数
function sumNum(...num:number[]):number {
  let sum:number = 0;
  for(let i = 0; i < num.length; i++) {
      sum += num[i];
  }
  return sum;
}

console.log(sumNum(1,2,3,4,5,6,7,8,9));

// 重载
function printOverload(name:String):String;

function printOverload(num:number):number;

function printOverload(x:any):any {
  if(typeof x === 'string') {
    return `name: ${x}`
  } else {
    return `number: ${x}`
  }
}

console.log(printOverload('Tuzx'));
console.log(printOverload(18));


