// class Person {
//     firstName : string;
//     constructor(firstName:string){
//         this.firstName = firstName
//     }
// }

// const per = new Person("John");
// console.log(per.firstName);

class Person{
    private name:string

    public constructor(name:string){
        this.name = name;
    }

    public getName():string{
        return this.name
    }
}

const user = new Person("meekail");

console.log(user.getName())


// perameter properties
class User{
    constructor(private name:string){}

    public getName(){
        return this.name
    }
}

const user1 = new User("abcd");
console.log(user1.getName())
// console.log(user.name) // error : Property 'name' is private and only accessible within class 'Person'.ts(2341)

// readonly

class Customer{
    private readonly name:string

    public constructor(name:string){
        this.name = name
    }

    getName():string{
        return this.name
    }
}

const cust = new Customer("John");
console.log(cust.getName());

// cust.name = "Jane" // error : propertie name is private and readonly so you cant reassign in name  


// interface shape {
//     getArea : () => number
// }

// class Rectangle implements shape {
//     public constructor(protected readonly width:number,protected readonly height:number){}

//     public getArea():number{
//         return this.width * this.height
//     }
// }   
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  constructor(protected readonly width1: number, protected readonly height1: number) {}

  public getArea(): number {
    return this.width1 * this.height1;
  }
}

const rec = new Rectangle(5,10);
console.log(rec.getArea());
