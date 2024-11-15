interface Rectangle {
    height : number
    width : number
}

interface ColorRectangle extends Rectangle {
    color : string
}

const rectangle:Rectangle = {
    height : 200,
    width : 200
}
console.log(rectangle) // {height : 200, width : 200}

const colRectan:ColorRectangle = {
    height : 300,
    width : 300,
    color : "red"
}

console.log(colRectan)  // {height : 300, width : 300, color : "red"}