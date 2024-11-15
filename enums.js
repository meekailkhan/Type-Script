var myEnum;
(function (myEnum) {
    myEnum[myEnum["North"] = 0] = "North";
    myEnum[myEnum["East"] = 1] = "East";
    myEnum[myEnum["West"] = 2] = "West";
    myEnum[myEnum["South"] = 3] = "South";
})(myEnum || (myEnum = {}));
console.log(myEnum.North); // 0
// myEnum.East = 23 // error : Cannot assign to 'East' because it is a read-only property.ts(2540)
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
})(statusCode || (statusCode = {}));
console.log(statusCode.NotFound); // 404
// statusCode.BadRequest = 500 // error : Cannot assign to 'BadRequest' because it is a read-only property.ts(2540
console.log(statusCode.Accepted); // 202
console.log(statusCode.Success); // 200
var directions;
(function (directions) {
    directions["North"] = "North";
    directions["East"] = "East";
    directions["West"] = "West";
    directions["South"] = "South";
})(directions || (directions = {}));
console.log(directions.East); // East
// directions.North = "abcd" // erro : Cannot assign to 'North' because it is a read-only property.ts(2540)
console.log(directions.South); // South
var vhicles;
(function (vhicles) {
})(vhicles || (vhicles = {}));
console.log(vhicles);
