class Engine {
    start(){
        console.log('engine started')
    }
}

class Car {
    constructor(private engine : Engine){}
    drive(){
        this.engine.start()
        console.log('car is moving')
    }
}
const engine = new Engine()
const car = new Car(engine)

car.drive()