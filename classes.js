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

class person {
    constructor(name,dateOfBirth){
        this.name = name;
        this.year = dateOfBirth;
    }
    age(x){
        return x - this.year
    }
}

let date = new Date()
let year = date.getFullYear()

let user = new person('kolasjunior',1999);
console.log(`${user.name} is ${user.age(year)}  years old`);
