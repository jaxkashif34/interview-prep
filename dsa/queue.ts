// enqueue, dequeue, peek, getSize

class Node<T extends string | number> {
  next: Node<T> | null = null;
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T extends string | number> {
  private front: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private size: number = 0;
  constructor() {}

  enqueue(value: T) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.tail = node;
    }
    this.tail!.next = node;
    this.tail = node;
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) return -1;
    const value = this.front?.value;

    this.front = this.front!.next;

    if (!this.front) this.tail = null;
    this.size--;
    return value;
  }
  peek() {
    if (this.isEmpty()) return -1;
    return this.front!.value;
  }
  isEmpty(): boolean {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  toString() {
    let result = '';

    while (this.front) {
      result += this.front.value + (this.front.next ? '->' : '');
      this.front = this.front.next;
    }
    return result;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
// queue.dequeue();
// queue.dequeue();
console.log(queue.toString());
// console.log(queue.toString());

export {};
