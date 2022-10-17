//Array
// note that Arrays are mutable
{const fruits = ['mango','guava','watermelon','banana']
// console.log(fruits[1]);
fruits[1] = 'apple';

//using the length property
// output the last value
console.log(fruits[fruits.length - 1]);
console.log(fruits[fruits.length - 1] = 'dabino');
console.log(fruits);

//using the sort method arrange it alphbetically
const newFruit = fruits.sort()
console.log(newFruit);
}

//using compare function to sort numbers

{
let regularSortNumbers = [1,234,5,63,9,89,6,4,5]
console.log(regularSortNumbers);

let correctSortNumbers = [1, 234, 5, 63, 9, 89, 6, 4, 5];

correctSortNumbers.sort((a,b) => a - b)
console.log(correctSortNumbers);

}

//adding item inside an array
{
    const studentNames = ['faith' , 'steve']
    studentNames[studentNames.length] = 'noibi'
    console.log(studentNames);

}

//INSTANCEOF
//another method to check array datatype as opposed isArray method
{const cars=['volvo','benz']
console.log(cars instanceof Array);
}

//important Array methods
{
const poly = ['faith', 'steve'];

//push method add another item into the array
poly.push('kola')
console.log(poly);

//pop method removes the last item
poly.pop()
console.log(poly);

//shift method removes the first-item
poly.shift('faith')
console.log(poly);

// unshift method add an item at the initial position
poly.unshift('faith','jjunior','lola','bobo');
console.log(poly);

//splice method delete the items from the specified position
poly.splice(0,2) //2-delete no items
console.log(poly);

//slice method
const polye = poly.slice(0,3) //the last item specify the delete count
console.log(polye);

const polyi = poly.toString();
console.log(polyi);
}

// Array iteration
{
    const arr = [1,2,3,4,5,6]
    // for loop
    for (let i = 0 ;i < arr.length; i++) {
        console.log(arr[i]) // the i represent all the items in the array;
         
    }

    // forEach method
    arr.forEach((value, index, Array) => {
      console.log(value , index , Array);
    //  return value; //does not work on foreach
    })

    //filter method
    const result = arr.filter((value,index,Array) => {
        return value //the return keyword works on the filter method and it returns every item in the array
    })
    console.log(result);

    //map method add 10 to each item n the array
    const result2 = arr.map((value,index,Array) => {
        return Array + 10 
    })
console.log(result2);

//reduce method used to add up all the item in the array
const result3 = arr.reduce((prev,current) => {
return prev + current 
})
console.log(result3);

}
//a used case for map  iteration method
{
const players = [
    id1={
        firstName:'Lionel',
        lastName:'Messi',
        age:25,
        sex:'male'
    },

    id2={
        firstName:'Cristiano',
        lastName:'Ronaldo',
        age:25,
        sex:'female'
    },
    id3={
        firstName:'mikel',
        lastName:'obi',
        age:25,
        sex:'male'
    }
]
 
let newPlayer ={};
newPlayer.fullName = players.map((e) => {
   
    return `${e.firstName}  ${e.lastName}`
}) 
console.log(newPlayer);
}
let names = ['fri','chi','kri','pli','dri']
let newNames = names.map((e) => {
return e += 'ies'
})
console.log(newNames);

// const language = "JavaScript"
// const map = Array.prototype.map
// const letters = map.call(language, eachLetter => {
//     return `${eachLetter}`
// })

// console.log(letters) //  ['J','a','v','a','S','c','r','i','p','t']

console.log('2' - '1');

const num = [2,3,4,5,6,7,78,8,9,3]
// var letNum = num.reduce((prev,current) => {
//      return prev + current
// })
const newNum = num.map((e) => {
   return  e += 25;
})

const addNum = newNum.reduce((prev,current) => {
    return prev + current
})
console.log(newNum,addNum);






//snippet to output the last value of the last item in an Array
//var last = cars[cars.length - 1]
//var final = last[last.length - 1]
//console.log(final);
//cars[1] = 'noibi'


















