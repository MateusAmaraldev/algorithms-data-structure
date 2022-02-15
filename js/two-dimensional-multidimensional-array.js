let avgTempWeek = [];

let firstWeeks = [];
let lastWeeks = [];
let avgTempWeek1 = [33, 25, 19.2, 27, 18.5, 22, 20];
let avgTempWeek2 = [22, 20.1, 17, 27, 30, 32, 35.2];

let avgTempWeek3 = [12, 25, 19.2, 35, 18.5, 22, 42];
let avgTempWeek4 = [42.3, 35, 17.2, 20, 30, 37, 30];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

for (let x = 0; x < month.length; x++) {

  for (let y = 0; y < month[x].length; y++) {

    for (let z = 0; z < month[x][y].length; z++) {

      console.log(month[x][y][z]);
    }
    
  }
}