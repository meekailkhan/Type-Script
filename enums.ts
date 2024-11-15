enum myEnum {
    North,
    East,
    West,
    South
}

console.log(myEnum.North);// 0

// myEnum.East = 23 // error : Cannot assign to 'East' because it is a read-only property.ts(2540)

enum statusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(statusCode.NotFound) // 404
// statusCode.BadRequest = 500 // error : Cannot assign to 'BadRequest' because it is a read-only property.ts(2540
console.log(statusCode.Accepted) // 202
console.log(statusCode.Success) // 200

enum directions {
    North = "North",
    East = "East",
    West = "West",
    South = "South"
}

console.log(directions.East); // East
// directions.North = "abcd" // erro : Cannot assign to 'North' because it is a read-only property.ts(2540)
console.log(directions.South) // South


enum vhicles {

}

console.log(vhicles)