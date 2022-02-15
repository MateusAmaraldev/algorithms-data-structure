class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

 enqueue = (element, priority) => {
    let queueElement = new QueueElement(element, priority);
    let added = false;

    for (let i = 0; i < this.items.length; i++) {

      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      console.log(queueElement.priority);
      this.items.push(queueElement);
    }
  }

  dequeue = () => {
    return this.items.shift();
  }

  print = () => {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${this.items[i].element} ${this.items[i].priority}`);

    }
  }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue('Mbappe', 2);
priorityQueue.enqueue('Neymar', 1);
priorityQueue.enqueue('Messi', 3);
priorityQueue.enqueue('Vini JR', 0);


priorityQueue.print()
