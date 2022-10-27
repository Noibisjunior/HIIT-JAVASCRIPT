//Evaluation error used eval()

//range error
// let num = 1
// num.toPrecision(500)
// console.log(num);// throws a range error
// a number cannot have 500 significant digit

//syntax error
//alertt('hello javascript) //this code is not conventionally written

//reference error
//console.log(x); // x is refernced but not defined

//Type error
// let n = 1
// n.toUpperCase() // n is not a string
// console.log(n);

//scope
//input
// let str = ''
// let obj = {}
// let arr = []

// //process
// const jk = () => {
//     str += 'javascript'
//     obj.name = 'noibi'
//     arr[0] = 'kola'
// }
// //output
// jk()
// console.log(str,obj,arr);

//Hoisting is when a variable is declared before initialization
// x = 12

// var x
// console.log(x);

//use strict
// 'use strict';
// const obje = {};
// Object.defineProperties(obje,'x',{value:0,writable:false})
// obje.x = 3.14
// console.log(obje);

//this keyword
{
  const person = {
    firstName: 'kola',
    lastName: 'juniors',
    fullName: () => {
      return this.firstName + ' ' +  this.lastName;
    },
  };
  console.log(person.fullName());
}

//regular function
function k (x){
return x * 5
}
console.log(k(5))

//Arrow function
k = (x) => {
return x * 10
}
console.log(k(5));

k = (x) =>  x * 10;
console.log(k(5));

// concat string with arrow function
// let strin = 'this'
// j = () =>  strin += ' is a string'
// console.log(j());

//adding items into the array using arrow function and spread operator
// let arr = []
// out = () =>   arr = [...arr,'kolas','junior','lola']

// console.log(out());

// myFunc = x => x + 3
// console.log(myFunc(5));

