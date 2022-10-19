// Date objects
// console.log(new Date());
// const d = new Date(2018)

//math objects
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(5.9));
console.log(Math.floor(5.9));
console.log(Math.round(5.5));
console.log(Math.trunc(Math.random() * 10));

console.log(Math.trunc(Math.random() * 10 + 1));

//min-max
// challenge create a function with a random Number
//using min-max

// ternary operators

function myFunction() {
//   let vote = ages > 18 ? 'too young to vote' : 'too old to vote';
  let ages = document.getElementById('age')
if(ages > 18){
    document.innerHTML('you are  eligible to vote')
}
 else {
 document.innerHTML('you are   eligible to vote')
}
//   if (isNaN(ages)) {
//     vote = `${ages} is not a valid number`;
//   }
}
