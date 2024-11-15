type CarYear = number
type CarModel = string
type CarType = string
type Car = {
    year : CarYear
    type : CarType
    model : CarModel
}

const carYear:CarYear = 2001;
console.log(carYear)

const carModel:CarModel = "Toyota";
console.log(carModel)

const carType:CarType = "Corolla";
console.log(carType)

const vicheles:Car = {
    // year : "2005", // error : type string is not assignable to type number
    year : 1980,
    type : "Safari",
    model : "TATA",
}

console.log(vicheles);