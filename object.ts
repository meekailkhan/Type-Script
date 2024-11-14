let car:{type:string,model:any,milage:number} = {
    type : "toyota",
    model : "A6603SL",
    milage : 40,
}

console.log(car); // {type: 'toyota', model: 'A6603SL', milage: 40}

let bike:{type:string,model:any,milage?:number} = {
    type : "splendor",
    model : "BS6558"
}

console.log(bike); // {type: 'splendor', model: 'BS6558'}

// bike.milage = "57" // Type 'string' is not assignable to type 'number'.ts(2322)
bike.milage = 57;
console.log(bike) // {type: 'splendor', model: 'BS6558', milage: 57}