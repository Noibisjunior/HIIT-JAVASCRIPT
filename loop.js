
// regular for  loop
// const arr = [...Array(11).keys()]
// arr.shift() removes the first item in the array
// console.log(arr);
//looping through the items in the array
// for (x = 4; x < arr.length; x++){
//     console.log(x);//output the index of the array
//     console.log(arr[x]);//output the element in the array
// }

//for in loop for array
//  for(x in arr){
//      console.log(x);//output the element in the array
//  }


// looping through an object using for in loops for objects
//use for in for object data type
// const person = {
//     username:'noibi',
//     password:'noibi123'
// }
// for(x in person){  // x represent values in the  person object
//     //console.log(x);//output only the key(index) 
//     console.log(person[x]); //output the value/item
// }

//for of loop does not work on objects data type
// but works on strings and array  data type

// let str = 'javascript'
// let e = 'lo'
// for(x of str){ // x represent values in the string
//     console.log(x + e);
// }
//output only the index of str variable and not the values
//  for(x in str){
//  console.log(x);
//  }

//BREAK AND CONTINUE this block of code stops executing once the loop get to 5
// {const arr = [...Array(11).keys()];
// arr.shift()
// for(x = 0; x<arr.length;x++){
//     if(x === 5){
//         break;}
//         console.log(arr[x]);
// }
// }
//continue jumps to the next iteration
// for (x = 0; x < arr.length; x++) {
//   if (x === 5) {
//     continue;
//   }
//   console.log(arr[x]);
// }
