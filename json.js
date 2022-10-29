
//javascript object notation
//it is used to provide an information about a project
// const information = {
// 'employees' : [
//     {'firstName' : 'john', 'lastName': 'doe'},
//     {'firstName' : 'david', 'lastName': 'kill'},
//     {'firstName' : 'ode', 'lastName': 'inya'}
// ]
// }
// console.log(information.employees[0]);
// console.log(information.employees[2].lastName);

// let t = '{ "employes" : [' +
//  '{ 'Name':'john', 'lastname':'doe'},'+
//  '{ 'firstName':'john', 'lastname':'doe'},'+
//  '{ 'firstName':'john', 'lastname':'doe'}]}';

//converting string into object
// const obj = JSON.parse(t);
// console.log(typeof obj);

//debugging
//  using debugger  debug error above the debugger keyword

//Asynchronous function is a function executing paralel to another function
//while synchronous function is a function that is onhold/has to wait for another function to execute  


//callback function is a function that is written as a parameter in another function
// const arr = [1,2,3,4,5]
//  arr.map((e) => {
//  return e + 4 //return very important
// })
// console.log(arr);
//async function are function that keeps the code executing while making connections

// const fruit = ['b','k','l']
// function names(arr,callback) {
//     for (let i = 0; i < arr.length;) {
//         const element = arr[i];
//         callback(element)
//     }
// }
// names(fruit,() => {
//     console.log(element);
// })

//example of a callback function using settimeout and setinterval
// setTimeout(() => {
// console.log('this is a callback function');
// },1000)

//another example
// setInterval(alertt,5000)//alertt is a callback function
// function alertt(){
//     console.log('understanding a callback function');
// }
//it can also be written as
// setInterval(() => {
//     alert('callback function is simple to understand'),5000
// },5000)//this is a callback function









