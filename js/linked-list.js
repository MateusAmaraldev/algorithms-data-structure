class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {

  constructor() {
    this.nodeClass = null;
    this.head = null;
    this.length = 0;
  }
  append = (element) => {
    this.nodeClass = new Node(element);
    let current;

    if (this.head === null) {
      this.head = this.nodeClass;
    }
    else {

      current = this.head;

      while (current.next) {
        current = current.next;

      }

      current.next = this.nodeClass;

    }
    this.length = this.length + 1;
  }

  insert = (position, element) => {

  }

  removeAt = (position) => {
    let current = this.head;
    let previous;
    let index = 0;
    if (position > -1 && position < this.length) {

      if (position === 0) {
        this.head = current.next;
      }
      else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;

      return current.element;
    }

    return null;

  }

  remove = (element) => {

  }

  indexOf = (element) => {

  }

  isEmpty = () => {

  }

  size = () => {

  }

  toString = () => {
    let current = this.head;
    let string = '';

    while (current) {
      string += current.element + ' ';
      current = current.next;
    }

    return string;
  }

  print = () => {
    return console.log(this.toString());
  }
}

let linkedList = new LinkedList();

linkedList.append('joao');
linkedList.append('jose');
linkedList.append('maria');

linkedList.print();

linkedList.removeAt(1);

 linkedList.print();

