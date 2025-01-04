export {}

interface Rectangle {
    height : number,
    width : number
}

interface colorRectangle extends Rectangle {
    color : string
}

const colorRec : colorRectangle = {
    height : 200,
    width : 200,
    color : "red"

}

console.log(colorRec)
console.log(colorRec.height)
console.log(colorRec.width)
console.log(colorRec.color)