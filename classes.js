// class Person {
//     firstName : string;
//     constructor(firstName:string){
//         this.firstName = firstName
//     }
// }
// const per = new Person("John");
// console.log(per.firstName);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var user = new Person("meekail");
console.log(user.getName());
// perameter properties
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var user1 = new User("abcd");
console.log(user1.getName());
// console.log(user.name) // error : Property 'name' is private and only accessible within class 'Person'.ts(2341)
// readonly
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    return Customer;
}());
var cust = new Customer("John");
console.log(cust.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width1, height1) {
        this.width1 = width1;
        this.height1 = height1;
    }
    Rectangle.prototype.getArea = function () {
        return this.width1 * this.height1;
    };
    return Rectangle;
}());
var rec = new Rectangle(5, 10);
console.log(rec.getArea());
