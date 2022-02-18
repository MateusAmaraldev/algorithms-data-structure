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
  append = (element) => { //maria
    this.nodeClass = new Node(element); //maria next = null
    let current;


    if (this.head === null) { //false
      this.head = this.nodeClass;
    }
    else {
      current = this.head; //joao
      while (current.next) { //true
        current = current.next; //joao -> jose

      }

      current.next = this.nodeClass; //jose -> maria

    }
    this.length = this.length + 1; //3
  }

  insert = (position, element) => { //1, vini

    if (position >= 0 && position <= this.length) { //true
      this.nodeClass = new Node(element); //vini next =null
      let current = this.head; //joao
      let previous; //undefined
      let index = 0;

      if (position === 0) { // false
        this.nodeClass.next = current;
        this.head = this.nodeClass;
      }
      else {
        while (index++ < position) { // 0 < 1
          previous = current; //jose
          current = current.next;//maria
        }
        this.nodeClass.next = current; //maria
        previous.next = this.nodeClass;//vini jose...
      }
      this.length++;

      return true;
    }

    return false;
  }

  removeAt = (position) => { //1
    let current = this.head; //joao
    let previous;
    let index = 0;
    if (position > -1 && position < this.length) { //true

      if (position === 0) { //false
        this.head = current.next;
      }
      else {
        while (index++ < position) { // 0 < 1 
          console.log(index);
          previous = current; //joao
          current = current.next; //jose
        }
        previous.next = current.next; //joao -> maria
      }
      this.length--; //2

      return current.element; //jose
    }

    return null;

  }

  remove = (element) => {

  }

  indexOf = (element) => { //vini
    let current  = this.head; //joao(node0)

    let index = 0;

    while (current) { //true
      if(element === current.element){ //false | true
        return index;
      }
      index++; //0->1
      current = current.next; //joao -> vini(node1)
    }

    return -1;
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

// linkedList.removeAt(1);

// linkedList.insert(0,'mateus');
linkedList.insert(1, 'vini');


linkedList.print();

console.log(linkedList.indexOf('vini'));
