// explicit defined
function getTime() {
    return new Date().getTime();
}
var time = getTime();
console.log(time);
// void type : it means these function nothing have to return 
function printHello() {
    // return 'hello world' // error : type string not assignable to type void
    console.log("hello world");
}
printHello(); // hello world
// type perameters : it means these function return value based on its perameter
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(NaN, 0)); // NaN
// optional perameter
function add(num1, num2, num3) {
    return num1 + num2 + (num3 || 0);
}
console.log(add(21, 4)); // 25
console.log(add(17, 4, 4)); // 25
// default perameter 
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2)); // 1024
console.log(pow(2, 8)); // 256
console.log(pow(2, 5)); // 32
// Named perameter
function divide(_a) {
    var divident = _a.divident, divisor = _a.divisor;
    return divident / divisor;
}
console.log(divide({ divident: 100, divisor: 10 })); // 10
console.log(divide({ divident: 500000, divisor: 30 })); // 16666.666666666668
// rest perameter
function addition(num1, num2) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return num1 + num2 + rest.reduce(function (acc, val) { return acc + val; }, 0);
}
console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45
console.log(addition(1, 2, 3, 4, 5, 6, 7, 5, 2, 5)); // 40
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(10)); // -10
console.log(negateFunction(8)); // -8
console.log(negateFunction(-15)); // 15
