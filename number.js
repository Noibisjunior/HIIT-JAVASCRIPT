//interpolating strings passing variables into string
let p = document.getElementById('demo');
let sti = 'this is a string';
p.innerHtml = `<p> ${sti} </p>`;

//numbers NAN
{
    let x = 2
    let y = 'fruits'
    console.log(x * y);
}

//number base conversion
let my = 20
console.log(my.toString(2));
console.log(my.toString(16));//base 16

//converting number to string
let n = 23
let ns = n.toString()
console.log(ns,typeof(ns));

// fixed method
let g = 9.899
console.log(g.toFixed());

//exponential method
let e = 9.899;
console.log(e.toExponential());

//precision method
let q = 9.899;
console.log(q.toPrecision());

// parseFloat method parse a string into number
let k = parseFloat('10.6');
console.log(typeof(k));

