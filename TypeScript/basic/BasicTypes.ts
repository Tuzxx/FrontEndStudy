// Boolean类型
let b:boolean = true
console.log(b);

// Number类型
let n:number = 100
console.log(n);

// String类型
let s:String = "Hello World"
console.log(s);

// Array类型(数组)
  // 第一种定义方式
let arrN1:number[] = [1,2,3,4,5]
console.log(arrN1);

let arrS1:String[] = ['Hello', 'World'];
console.log(arrS1);

  // 第二种定义方式 
let arrN2:Array<number> = [1,3,5,7,9]
console.log(arrN2);

let arrS2:Array<String> = ['Hi','World']
console.log(arrS2);

// Tuple类型(元组)
let tup:[String, Number, Boolean] = ['123', 123, false]
console.log(tup);

// Enum类型(枚举)
// 若不赋值，则默认赋值下标数
enum Gender {man=1, woman=0}
console.log(Gender.man, Gender.woman);

enum Flag {success=1, failed=0}
let flag:Flag = 1
console.log(flag);

// Any类型
let a:any = 123
a = 'test'
console.log(a);
// 用处
let odiv:any = document.getElementById('test')
console.log(odiv);

// Null & Undefined 类型
// 是所有类型的子类型
let nu:null = null
let und:undefined = undefined
// 多类型
let mulNum: Number | undefined | null

// Void类型
// 无返回值
function print():void {

}

// Never类型
// 任何类型的子类型
// 表示的是那些永不存在的值的类型