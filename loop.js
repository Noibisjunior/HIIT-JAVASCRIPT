
// regular for  loop
// const arr = [...Array(11).keys()]
// arr.shift()
// console.log(arr);
// for (x = 4; x < arr.length; x++){
//     console.log(x);//output the index of the array
//     console.log(arr[x]);//output the element in the array
// }

//for in loop for array
// for(x in arr){
//     console.log(x);
// }


// looping through an object using for in loops for objects
//use for in for object data type
const person = {
    username:'noibi',
    password:'noibi123'
}
for(x in person){
    console.log(x);//output only the key(index) 
    console.log(person[x]); //output the value
}

//for of loop does not work on objects data type
// but works on str and arr
let str = 'javascript'
let e = 'lo'
for(x of str){
    console.log(x + e);
}
// for(x in str){
// console.log(x);
// }

//BREAK AND CONTINUE
// const arr = [...Array(11).keys()];
// arr.shift()
// for(x = 0; x<arr.length;x++){
//     if(x === 5){
//         break;}
//         console.log(arr[x]);
// }

//continue jumps to the next iteration
// for (x = 0; x < arr.length; x++) {
//   if (x === 5) {
//     continue;
//   }
//   console.log(arr[x]);
// }




















