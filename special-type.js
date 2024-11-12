// let u = true;
// // u = "string" // error : type string not assignable to type boolean
// // Math.round(u) // error : type number not assignable to type boolean
// let v:any = true;
// v = "abcd";
// console.log(v) // abcd
// console.log(Math.round(v)) // NaN : cuz we assign "abcd" to v
var w = 1;
w = "meekail";
console.log(w);
w = {
    runANonExistenMethod: function () {
        console.log("hello world");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistenMethod();
}
