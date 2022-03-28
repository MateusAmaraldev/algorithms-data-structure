class Set {
  constructor() {
    this.items = {}

  }

  addValue = (value) => {
    if (!this.valueExists(value)) {
      this.items[value] = value;
      return true;
    }

    return false;
  }

  deleteValue = (value) => {
    if (this.valueExists(value)) {
      delete this.items[value];
      return true;
    }

    return false;
  }

  valueExists = (value) => {
    return this.items.hasOwnProperty(value);
  }

  clearAll = () => {
    this.items = {};
  }

  size = () => {
    return Object.keys(this.items).length;
  }

  values = () => {
    let values = [];
    let keys = Object.values(this.items);

    for (let i = 0; i < keys.length; i++) {
      values.push(this.items[keys[i]]);

    }
    return values;
  }

  union = (set) => {
    let unionSet = new Set();//[1,2,3,4,5,6]
    let values = this.values();//[1,2,3]

    for (let i = 0; i < values.length; i++) {
        unionSet.addValue(values[i]);      
    }
    values = set.values(); //[3,4,5,6]

    for (let i = 0; i < values.length; i++) {
      unionSet.addValue(values[i]);
    }

    return unionSet;
  }

  interaction = (otherSet) => {}
}

let set = new Set();

set.addValue(1);
set.addValue(2);
set.addValue(3);

let secondSet = new Set();

secondSet.addValue(3);
secondSet.addValue(4);
secondSet.addValue(5);
secondSet.addValue(6);


let unionSets = set.union(secondSet);

console.log(unionSets.values());