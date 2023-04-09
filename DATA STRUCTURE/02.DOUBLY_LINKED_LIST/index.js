class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let currentTail = this.tail;

    if (!this.tail) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      this.tail.prev = null;
    }
    this.length--;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(11);
list.push(12);
list.pop();

console.log(list);
