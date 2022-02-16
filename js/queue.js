export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue = (element) => {
    this.items.push(element);
  }

  dequeue = () => {
    return this.items.shift();
    // for(let i = 1; i < items.length; i++) {
    //   items[i-1] = items[i];
    // }
  }

  front = () => {
    return this.items[0];

  }

  isEmpty = () => {
    return this.items.length === 0;
  }

  size = () => {
    return this.items.length;
  }

  print = () => {
    console.log(this.items.toString());
  }
}

let queue = new Queue();

queue.enqueue('mbappe');
queue.enqueue('neymar');
queue.enqueue('messi');

queue.print();

queue.dequeue();

queue.print();

console.log(queue.front());

queue.size();
queue.print();



