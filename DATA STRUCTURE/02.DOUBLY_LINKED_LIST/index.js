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
    return currentTail;
  }

  shift() {
    if (this.length == 0) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let count = 0;
    let current = this.head;
    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }

  optimizedGet(index) {
    if (index < 0 || index >= this.length) return undefined;

    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      console.log(true);
      return true;
    }
    return false;
  }

  print(){
    let arr = [];
    let current = this.head
    while(current){
        arr.push(current.val)
        current = current.next
    }
    console.log(arr);
}

}

const list = new DoublyLinkedList();
list.push(10);
list.push(11);
list.push(12);
// list.pop();
// list.shift();
// list.unshift(9);
// const index = list.get(3);
// const index = list.optimizedGet(3);
list.set(0, 9);
list.print()

console.log(list);
