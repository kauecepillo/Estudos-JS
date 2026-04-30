//vetores e array
// array = ['string', true, 2];
//console.log(array)

//let array = ["string", true, 1, ['array1'], ['array2'], ['array3']];


//forEach
//array.forEach(function(item, index){console.log(item, index)})

//push
//array.push("oi");

//pop
//array.pop();

//shift
//array.shift();

//unshift
//array.unshift("olá")

//indexof
//console.log(array.indexOf(true))

//splice
//array.splice(0,3)

//slice
//let novoArray = array.slice(0, 3)

//
//console.log(novoArray)

//Objetos

let object= {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno : {objectInterno: 'objeto interno'}}

//console.log(object.array);

//var string = object.string;
//console.log(string);

//var arrayInterno = object.array;
//console.log(arrayInterno)

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);