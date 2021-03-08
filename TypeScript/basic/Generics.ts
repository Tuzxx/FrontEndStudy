// Generics 泛型
// 使参数 返回值类型保持一致的同时
// 可以接收不同类型的数据

// 泛型类
class TuList<T> {
  list:T[] = []

  add(value:T):void {
    this.list.push(value);
  }

  findMin():T {
    let min:T = this.list[0] 
    this.list.forEach(element => {
      if(element < min) {
        min = element
      }
    });
    return min;
  }
}

// 泛型接口
interface Print {
  <T>(value:T):T
}

let printS:Print = function<T> (value:T):T {
  return value
}

console.log(printS(123));
