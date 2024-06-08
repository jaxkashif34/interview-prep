// push, pop, peek, isEmpty, size, toString

class Stack {
  private top: number = 0;
  private store: number[] = [];
  constructor() {}

  push(value: number) {
    this.store[this.top] = value;
    this.top++;
  }
  pop() {
    if (this.isEmpty()) return -1;
    const value = this.store[this.top];
    this.store.slice(this.top, 1);
    this.top--;
    this.store.length--;
    return value;
  }
  peek() {
    if (this.isEmpty()) return -1;
    return this.store[this.top];
  }
  isEmpty(): boolean {
    return this.store.length === 0;
  }
  getSize() {
    return this.store.length;
  }
  toString() {
    let result = '';
    if (!this.store.length) return result;
    for (const value of this.store) {
      result += `${value} ${
        this.store[this.store.indexOf(value) + 1] ? '-> ' : ''
      }`;
    }
    return result;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.toString());
// console.log(stack.toString());

export {};
