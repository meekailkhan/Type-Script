"use strict";
class Engine {
    start() {
        console.log('engine started');
    }
}
class Car {
    engine;
    constructor(engine) {
        this.engine = engine;
    }
    drive() {
        this.engine.start();
        console.log('car is moving');
    }
}
const engine = new Engine();
const car = new Car(engine);
car.drive();
