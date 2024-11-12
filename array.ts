let arr:string[] = ["meekail","mujaahid","muffakir"];
// arr.push(43) // error argument type of number is not assignable to perameter typeof string
console.log(arr); // ["meekail","mujaahid","muffakir"];
arr.push("fayyaz");
console.log(arr); // ["meekail","mujaahid","muffakir","fayyaz"];

let arr2:number[] = [32,43,65,87];
//arr2.push("abcd") // error : argument type of string is not assignable to perameter type of number
console.log(arr2); // [32,43,65,87]
arr2.push(100);
console.log(arr2); // [32,43,65,87,100]


let arr3:any[] = ["meekail",20,"mujaahid",25];
console.log(arr3); // ["meekail",20,"mujaahid",25]
arr3.push("muffakir",18);
console.log(arr3); // ["meekail",20,"mujaahid",25,"muffakir",18]

let arr4 = [...arr3];
console.log(arr3) // ["meekail",20,"mujaahid",25,"muffakir",18]


let arr5:readonly string[] = ["meekail"];
// arr5.push("mujaahid") // property 'push' does not exist on type 'readonly string[]' 

let arr6 = [1,2,3,4]; // all the element with typeof number its implicit type define
// arr6.push("abcd") // error : Argument of type 'string' is not assignable to parameter of type 'number'
arr6.push(5);
console.log(arr6) // [1,2,3,4,5]


let arr7 = ["abcd",12,"efght"];
arr7.push(65);
console.log(arr7) // ["abcd",12,"efght",65]
arr.push("mujaahid")
console.log(arr7) // ["abcd",12,"efght",65,"mujaahid"]
