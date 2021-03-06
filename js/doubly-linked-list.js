class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.nodeClass = null;
    this.head = null;
    this.length = 0;
    this.tail = null;
  }
  append = (element) => {
    //maria
    this.nodeClass = new Node(element); //maria next = null
    let current;

    if (this.head === null) {
      //false
      this.head = this.nodeClass;
      this.tail = this.nodeClass;
    } else {
      current = this.head; //joao
      while (current.next) {
        //true
        current = current.next; //joao -> jose
      }

      current.next = this.nodeClass; //jose -> maria
      this.tail = this.nodeClass;
    }
    this.length = this.length + 1; //3
  };

  insert = (position, element) => {
    //0, vinijr
    if (position >= 0 && position <= this.length) {
      //true

      this.nodeClass = new Node(element); //vinijr next = null previous = null

      let current = this.head; //joao next = jose
      let previous;
      let index = 0;

      if (position === 0) {
        //true
        if (!this.head) {
          this.head = this.nodeClass;
          this.tail = this.nodeClass;
        } else {
          this.nodeClass.next = current; //joao
          current.previous = this.nodeClass; //vinijr
          this.head = this.nodeClass; //vinir joao
        }
      } else if (position === this.length) {
        current = this.tail;
        current.next = this.nodeClass;
        this.nodeClass.previous = current;
        this.tail = this.nodeClass;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        this.nodeClass.next = current;
        previous.next = this.nodeClass;
        current.previous = this.nodeClass;
        this.nodeClass.previous = previous;
      }

      this.length++; //1
      return true;
    } else {
      return false;
    }
  };

  removeAt = (position) => {
    //1
    if (position > -1 && position < this.length) {
      //true

      let current = this.head; //joao
      let previous;
      let index = 0;

      if (position === 0) {
        //true
        this.head = current.next; //joao
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.previous = null;
        }
      } else if (position === this.length - 1) {
        //true
        current = this.tail; //maria
        this.tail = current.previous; //jose
        this.tail.next = null;
      } else {
        //1
        while (index++ < position) {
          //0 - 1
          previous = current; //joao
          current = current.next; //jose
        }
        previous.next = current.next; //maria
        current.next.previous = previous; //joao
      }
      this.length--;

      return current.element;
    } else {
      return null;
    }
  };

  remove = (element) => {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  indexOf = (element) => {
    //vini
    let current = this.head; //joao(node0)

    let index = 0;

    while (current) {
      //true
      if (element === current.element) {
        //false | true
        return index;
      }
      index++; //0->1
      current = current.next; //joao -> vini(node1)
    }

    return -1;
  };

  isEmpty = () => {
    return this.length === 0;
  };

  size = () => {
    return this.length;
  };

  getHead = () => {
    return this.head;
  };

  toString = () => {
    let current = this.head;
    let string = "";

    while (current) {
      string += current.element + " ";
      current = current.next;
    }

    return string;
  };

  print = () => {
    return console.log(this.toString());
  };
}

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append("joao");
doublyLinkedList.append("jose");
doublyLinkedList.append("maria");
doublyLinkedList.append("lucas");

doublyLinkedList.insert(0, "vinijr");

doublyLinkedList.print();

doublyLinkedList.removeAt(3);
doublyLinkedList.removeAt(doublyLinkedList.size() - 1);

doublyLinkedList.print();
