var car = {
    type: "toyota",
    model: "A6603SL",
    milage: 40,
};
console.log(car);
var bike = {
    type: "splendor",
    model: "BS6558"
};
console.log(bike);
// bike.milage = "57" // Type 'string' is not assignable to type 'number'.ts(2322)
bike.milage = 57;
console.log(bike);
