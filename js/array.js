let avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

console.log(avgTemp);

let dayOfWeek = new Array();
dayOfWeek.push('Sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');

// for (let i = 0; i < dayOfWeek.length; i++) {
//   const element = dayOfWeek[i];

//   console.log(element);
// }
dayOfWeek.map((day)=>{
console.log(day);
});

let fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 2;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];


}
console.log(fibonacci);

let numbers =[0,1,2,3,4,5,6,7,8,9];

//insere dado na ultima posicao
numbers.push(10);

//insere dado na primeira posicao
numbers.unshift(-1);

//deleta dado na ultima posicao
numbers.pop();
//deleta dado a primeira posicao
numbers.shift();

//deleta numa posição especifica
numbers.splice(3,3);

//insere numa posição especifica  0 = não deletar
numbers.splice(3,0,3,4,5)

console.log(numbers);