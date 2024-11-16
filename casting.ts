var x:unknown = "abcd"

// console.log(x.length) // error : x is type of unknown
console.log((x as string).length);


var y:unknown = 43;

console.log((y as string).length) // undefined becuase number dont have length

// casting with <>
var a:unknown = "efghi";
console.log((<string>a).length) // 5