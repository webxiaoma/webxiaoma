//   定义栈的类
class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    return this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  // 查询栈顶的元素
  peek() {
    return this.stack[this.getSize() - 1];
  }
  //返回栈的长度
  getSize() {
    return this.stack.length;
  }
  // 栈的非空判断
  isEmpty() {
    return this.getSize() === 0;
  }
}
function testIsValid(str) {
  // 以左右括号来建立一个对象，key为左括号，value为右括号
  var Map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  //实例化一个栈
  const myStack = new Stack();
  //遍历str字符串
  for (let v of str) {
    debugger
    if (Map[v]) {
      myStack.push(v); //是左括号，入栈
    } else if (Object.values(Map).includes(v)) {
      // 右括号  将当前的元素和栈顶的第一个元素进行匹配
      let last = myStack.pop();
      if (v !== Map[last]) return false;
    } else {
    //这里排除的是空字符的情况，如果不是左右括号而是其他的空字符串或者非法字符的话，将终止本次循环，执行下一次循环
      continue;
    }
  }
  //遍历完成之后要保证栈内要为空
  return myStack.getSize() === 0;
}
// console.log(testIsValid("()")); //true
// console.log(testIsValid("([ ) ]")); //false
// console.log(testIsValid("([{ )]")); //false
// console.log(testIsValid("()[ ]{}")); //true
// console.log(testIsValid(" { ]")); //false
console.log(testIsValid("{ [ ] }")); //true