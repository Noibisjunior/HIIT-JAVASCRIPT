// SET is a new method of declarin an array
// let set = new Set(['apple','orang','banana'])
// set.add('grape')

// set.forEach((value) => {console.log(value)
// })

// console.log(set);

// //MAP is a new method of declaring an object
// const fruit = new Map([
//     ['apples' , 500 ],
//     ['banana' , 400 ],
//     ['grape' , 300 ],
//     ['mango' , 100 ]
// ])

// fruit.set('watermelon',600) //add item into the map
// fruit.size //length of the map
// fruit.has('apples') //check the availability of the property
// fruit.entries()//output the key and value
// fruit.forEach((value) => value * 10) //iterate through every element in the map
// fruit.delete('mango',100)//as the name implies removes the element
// console.log(fruit);

// TYPEOF
// primitive data are  single simple data value 
//with no additional properties
//TYPE CONVERSION
 let x = 5
console.log(typeof(Number('noibi'))); //converting number to string
console.log(x.toString(5)); //using string method
console.log(typeof(x));

//JAVASCRIPT BITWISE
//AND OPERATOR(&&)
// 1,0 = 0
// 0,0 = 0
// 1,1 = 1

//OR OPERATOR(||)
// 1,0 = 1
//1,1 = 1
//0,0 = 0

// //XOR operator(^)
// 1,1 = 0
// 1,0 = 1
// 0,0 = 0

//REGULAR EXPRESSION
// A regular expresssion is a sequence of character that uses a search patterns

let text = 'visit mySchool'
let n = text.search(/myschool/i)//output the index of the search value
let replace = text.replace(/visit/i,'checkout')//replace value in the regular expression
console.log(text,replace);


let str = 'this is just a string' //using global(g)
let result = str.match(/s/gi) // checks the number of times the letter  s appears
console.log(result);

// ERRORS
try {
    adddlert('welcome')
} catch (err) {
    console.log(err.message,err.name);
}
finally{
    console.log('code is working');
}
// customizing error messages
    
try {
    adddlert('welcome')
}
catch(err){
    throw('there is a bug in the code')
}








