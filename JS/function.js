"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNum() {
    return 100;
}
let num = getNum();
console.log(num); // 100
function getTime() {
    return new Date().getTime();
}
let time = getTime();
console.log(time);
function fn() {
    console.log('hello world');
}
fn(); // hello world
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 2)); // 10
function addThreeNum(a, b, c) {
    return a + b + (c || 0);
}
let res = addThreeNum(5, 5);
let res2 = addThreeNum(5, 3, 2);
console.log(res); // 10
console.log(res2); // 10
function add(a, b, ...rest) {
    return a + b + rest.reduce((acc, val) => acc + val, 0);
}
let x = add(1, 2, 3, 4, 5, 6, 7, 8);
let y = add(5, 6, 7, 8, 9);
console.log(x); // 36
console.log(y); // 35
const negateFuntion = (value) => value * -1;
let n = negateFuntion(54);
console.log(n); // -54
