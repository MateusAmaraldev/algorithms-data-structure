import {Queue} from '../js/queue.js';

class HotPotato{
  constructor(nameList,number){
    this.nameList = nameList;
    this.number = number;
    this.queue = new Queue();
  }

  hotPotato=()=>{
    for (let i = 0; i < this.nameList.length; i++) {
      this.queue.enqueue(this.nameList[i]);
    }
    let eliminated = '';

    while (this.queue.size() >1){
      for (let j = 0; j < this.number; j++) {
        this.queue.enqueue(this.queue.dequeue());
      }
      eliminated = this.queue.dequeue();
      console.log(eliminated,'was eliminated');
    }
    return this.queue.dequeue();
  }
}

let players = [
  'mateus',
  'neymar',
  'messi',
  'vinijr'
];
let teste = new HotPotato(players,7);

let result = teste.hotPotato();

console.log(result);