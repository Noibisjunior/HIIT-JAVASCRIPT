//javascript classes are template for writing or creating objects
// {
// class Cars {
//     constructor(name){
//         this.name = name
//     }

// }
// const myCar = new Cars('toyota',)
// console.log(myCar);
// }

// class Cars {
//     constructor(name , year){
//         this.name = name
//         this.year = year
//     }
//     age(x){
//         return x - this.year
//     }
// }
// let date = new Date()
// let year = date.getFullYear()

// let myCar = new Cars ('ford',2015)
// console.log('my car is' + myCar.age(year) + 'years old');

// creating a class
// class Computer {
//     //it can also be called constructing the properties of an object
//     constructor(name,speed,model,core){
//         this.name = name
//         this.speed = speed
//         this.model = model
//         this.core = core
//     }
// //method
//     input(){
//         var a = prompt('please type in the computer name');
//         var b = alert(a)
//     }
//     // process()
//     // output()
// }
// //creating an object
// const newComp = new Computer('lenovo','2.50ghz','T420','core-i5')
// console.log(newComp.input());

//cont'd class inheritance
// class Class {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   response() {
//     return `my car is ${this.brand}`;
//   }
// }
// class MyCar extends Class {
//   constructor(brand, model) {
//     super(brand);
//     this.brand = brand;
//     this.model = model;
//   }

//   response2() {
//     return `${this.response()} and the model is ${this.model}`;
//   }
// }
// let myOwn = new MyCar('benz', 'v8');
// console.log(myOwn.response2());

// class Student {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   age() {
//     let date = new Date().getFullYear();
//     return date - this.year; //subtract the current year from the user year supplied
//   }
//or
// age(x){
//     return x - this.year
// }

// }

// let dates = new Date().getFullYear();

// let newStudent = new Student('johnson', 1987);
// console.log(
//   `my student  ${newStudent.name} is ${newStudent.age(dates)} is years old`
// );

// class FirstName {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
//   // a method
//   result() {
//     return `my name is ${this.firstName}`;
//   }
// }

// class lastName extends FirstName {
//   //the lastname class is inherited from the firstname class using the extend keyword
//   constructor(firstName, lastName) {
//     super(firstName);//inherit the firstname class using super
//     this.FirstName = firstName;
//     this.lastName = lastName;
//   }
//   //method inherited from result class
//   result2() {
//     return `${this.result()} and my lastname is ${this.lastName}`;
//   }
// }
// let studentFullName = new lastName('NOIBI', 'ABDULSALAAM');
// console.log(studentFullName.result2());

//MODULES
//import and export

//challenge
class Computer {
  constructor(input, logic, output) {
    this.input = input;
    this.logic = logic;
    this.output = output;
  }
  year() {
    let date = new Date().getFullYear();
    let realDate = date - 10;
    return realDate;
  }
}
let newComp = new Computer('data', 'process', 'file');

console.log(
  `this ${newComp.input} has being ${newComp.logic} into a ${
    newComp.output
  } in the year ${newComp.year()}`
);

class Laptop extends Computer {
  constructor(output, outdated) {
    super(output);
    this.output = output;
    this.outdated = outdated;
  }
  year2() {
    return `${this.year()} is the outdated year`;
  }
}
let newLaptop = new Laptop('files', 'expired');
console.log(
  `${newComp.output} is ${newLaptop.outdated} and ${newLaptop.year2()}`
);
