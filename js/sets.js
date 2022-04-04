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

  intersection = (otherSet) => {
    let intersectionSet = new Set();
    let values = this.values()  ;

    for (let i = 0; i < values.length; i++) {

      if(otherSet.valueExists(values[i])){
        intersectionSet.addValue(values[i]);
      }
    }

    return intersectionSet;
  }

  difference = (otherSet) => {
    let difference = new Set();
    let values = this.values();


    for (let i = 0; i < values.length; i++) {

      if(!otherSet.valueExists(values[i])){
        intersectionSet.addValue(values[i]);
      }
    }

    return difference;
  }

  subSet = (otherSet) =>{
    let values = this.values();
    if(this.size() > otherSet.size()){
      return false;
    } 

    for (let i = 0; i < values.length; i++) {
      if(!otherSet.valueExists(values[i])){
        return false;
      }
    }

    return true;



  }
}

let set = new Set();

set.addValue(1);
set.addValue(2);

let secondSet = new Set();

secondSet.addValue(1);
secondSet.addValue(2);
secondSet.addValue(3);


let thirdSet = new Set();

thirdSet.addValue(2);
thirdSet.addValue(3);
thirdSet.addValue(4);



console.log(set.subSet(secondSet));
console.log(set.subSet(thirdSet));

