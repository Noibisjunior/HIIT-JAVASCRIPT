const getData = async() => {
    var y = await 'hello world'
    console.log(y);
}

//all console is displayed before the getdata function
console.log(1);
getData()
console.log(2);