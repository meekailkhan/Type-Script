export {}

function getNum():number {
    return 100;
}

let num = getNum();
console.log(num) // 100

function getTime():number{
    return new Date().getTime()
}

let time = getTime();
console.log(time) 

function fn():void{
    console.log('hello world')
}

fn() // hello world

function multiply(a:number,b:number) : number{
    return a * b;
}

console.log(multiply(5,2)) // 10

function addThreeNum(a:number,b:number,c?:number):number{
    return a + b + (c || 0);
}

let res = addThreeNum(5,5);
let res2 = addThreeNum(5,3,2)

console.log(res) // 10
console.log(res2) // 10

function add(a:number,b:number,...rest : number[]) {
    return a + b + rest.reduce((acc,val)=> acc+val,0)
}

let x = add(1,2,3,4,5,6,7,8);
let y = add(5,6,7,8,9)

console.log(x) // 36
console.log(y) // 35

type Negate = (value : number) => number;
const negateFuntion : Negate = (value) => value * -1

let n = negateFuntion(54)
console.log(n) // -54