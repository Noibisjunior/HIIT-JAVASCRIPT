//key
const fruit = ['banana', 'apple', 'orange', 'banana', 'orange', 'grapes'];
const keys = fruit.keys()

let result = ''
for ( let x of keys){
    result += x
    console.log(x);
}
console.log(result);

//range of numbers using keys
const array = [...Array(10).keys()]
console.log(array);

//entries() output the key and its pairs
const pairs = fruit.entries()
for (let x of pairs){
    console.log(x);
}

const val = [...Array(100).keys()];
const resultss = values.filter((values) => values > 50);
console.log(resultss);

const compare = resultss.sort((a,b) => a - b)
console.log(compare);










