var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = ["meekail", "mujaahid", "muffakir"];
// arr.push(43) // error argument type of number is not assignable to perameter typeof string
console.log(arr); // ["meekail","mujaahid","muffakir"];
arr.push("fayyaz");
console.log(arr); // ["meekail","mujaahid","muffakir","fayyaz"];
var arr2 = [32, 43, 65, 87];
//arr2.push("abcd") // error : argument type of string is not assignable to perameter type of number
console.log(arr2); // [32,43,65,87]
arr2.push(100);
console.log(arr2); // [32,43,65,87,100]
var arr3 = ["meekail", 20, "mujaahid", 25];
console.log(arr3); // ["meekail",20,"mujaahid",25]
arr3.push("muffakir", 18);
console.log(arr3); // ["meekail",20,"mujaahid",25,"muffakir",18]
var arr4 = __spreadArray([], arr3, true);
console.log(arr3); // ["meekail",20,"mujaahid",25,"muffakir",18]
var arr5 = ["meekail"];
// arr5.push("mujaahid") // property 'push' does not exist on type 'readonly string[]' 
var arr6 = [1, 2, 3, 4]; // all the element with typeof number its implicit type define
// arr6.push("abcd") // error : Argument of type 'string' is not assignable to parameter of type 'number'
arr6.push(5);
console.log(arr6); // [1,2,3,4,5]
var arr7 = ["abcd", 12, "efght"];
arr7.push(65);
console.log(arr7); // ["abcd",12,"efght",65]
arr.push("mujaahid");
console.log(arr7); // ["abcd",12,"efght",65,"mujaahid"]
