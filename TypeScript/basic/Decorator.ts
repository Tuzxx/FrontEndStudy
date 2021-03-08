// Decorator 装饰器

// 普通装饰器
function log(params:any) {
  console.log(params);
  params.prototype.info = 'Test'
}

@log
class printlog {

  constructor() {

  }
}

let pl:any = new printlog();
console.log(pl.info);

// 装饰器工厂(可传参)

function log1(params:any) {
  return function(target:any) {
  target.prototype.info = params}
}

@log1("Test2")
class printlog1 {

  constructor() {

  }
}

let pl1:any = new printlog1();
console.log(pl1.info);

// 类装饰器修改类构造器

function log2(target:any) {
  return class extends target {
    info:String="装饰器"
  }
}

@log2
class printlog2 {
  info:String | undefined;

  constructor() {
    this.info = "类构造器"
  }
}

let pl2:any = new printlog2();
console.log(pl2.info);

// 属性装饰器

function logProperty(params:String) {
  return function(target:any, attr:any) {
    target[attr] = params
  }
}

class HttpClient {
  @logProperty('www.tuzx.com')
  logUrl:String | undefined

  constructor() {
  }
}

let httpClient:HttpClient = new HttpClient();
console.log(httpClient.logUrl);