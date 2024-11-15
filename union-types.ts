let userID:(string | number) = "meekail"
console.log(userID) // meekail

userID = 342
console.log(userID) // 342

function printStatusCode(code : (string | number)){
    console.log(`status code is ${code}`)
}

printStatusCode(404) // status code is 404
printStatusCode("200") // status code is 200

// printStatusCode(true) // error : Argument type of boolean is not assignable to perameter type of string|number