// {let x = 17
//     let y = 19
//         if(age >= 18){
//             console.log('old enough to vote');
//         }
//         else{
//             console.log('too young to vote');
//         }

// if(x < 18 || y > 18){
//     console.log('true');
// }
// else{
//     console.log('false');
// }

// if (x < 18 && y > 18) {
//   console.log('true');
// } else {
//   console.log('false');
// }
// }

// Ternary operators
{
  //   function ternary() {
  //     let voteable;
  //     let age = document.getElementById('age').value;
  //     // let ageTrim = age.trim() use age = NaN instead
  //     voteable = age > 18 ? `${age} can vote` : `${age} cannot vote`;
  //     if (isNaN(age) || ageTrim === '') {
  //       voteable = `${age} is not a valid age value`;
  //     }
  //     document.getElementById('pass').innerHTML = voteable;
  //   }
  //nullish or coalasing operator
  //   let name = 'noibbi'
  //   let text = undefined
  //   let result = name ?? text
  //   console.log(result);
  //   //optional chaining operator
  //   const obj = {
  //     name:'noibi',
  //     age:25
  //   }
  //   console.log(obj.color?.type);
}

//conditional statement
// function conditional() {
//   let result;
//   let age = document.getElementById('age').value;

//   let ageTrunc = age.trim();

//   if (age === NaN){//isNaN(age) || ageTrunc === '') {
//     result = `${age} is not a valid age value`;
//   } else if (age < 13) {
//     result = `${age} is a child`
//   } else if (age <= 19) {
//     result = `${age} is a teenager`
//   } else if (age <= 49) {
//     result = `${age} is a youth`
//   } else if (age <= 50) {
//     result = `${age} is old`
//   }

//   document.getElementById('fail').innerHTML = result;
// }

//student grade with conditionals
// function grade() {
//   let studentResult;

//   let grade2 = 'you have supplied an empty input';
//   let grade = document.getElementById('grade').value;
//   let gradeTrunc = grade.trim();
//   if (isNaN(grade)) {
//     studentResult = `${grade} is not a valid input `;
//   }
//   if (gradeTrunc === '') {
//     studentResult = `${grade2} `;
//   } else if (grade >= 70 && grade <= 100) {
//     studentResult = `${grade} is  an excellent performance`;
//   } else if (grade >= 60 && grade <= 69) {
//     studentResult = `${grade}  is a very good  performance`;
//   } else if (grade >= 50 && grade <= 59) {
//     studentResult = `${grade}   is a good performance`;
//   } else if (grade >= 40 && grade <= 49) {
//     studentResult = `${grade} you just pass through school,please buckle up`;
//   } else if (grade >= 0 && grade <= 39) {
//     studentResult = `${grade}  is a very poor performance,please repeat session`;
//   }
//   document.getElementById('fail').innerHTML = studentResult;
// }

// const time = new Date().getHours();
// if(time >= 12 && time <= 15){
//     console.log('good Afternoon');
// }
// console.log(time);

//switch statement


//   function switche() {
//     age = document.getElementById('grade').value;
//     // let ageTrunc = age.trim();

//     let result
//     switch (age ) {
//       case age === NaN:
//         result = `please provide a valid age input`;
//         break;
//       case age < 13:
//         result = `${age} is a child`;
//         break;
//       case age == 18:
//       case age == 19:
//         result = `${age} is a youth but is limited to some condtions`;
//         break;
//
      //  case age < 49:
//         result = `${age} is a youth`;
//         break;
//       case age >= 50:
//         result = `${age} is a senior citizen`;
//         break;
//     }
//     document.getElementById('fail').innerHTML = result;
//   }

