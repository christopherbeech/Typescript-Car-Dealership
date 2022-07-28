"use strict";
//Vehicule Class
class Vehicle {
    constructor(aType, aModel, aColor) {
        this.type = aType;
        this.model = aModel;
        this.color = aColor;
    }
    turnOnCar() {
        console.log(`The ${this.color} ${this.model}'s engine just started. (roaaam rooooaaam)`);
        return this;
    }
    turnOffCar() {
        console.log(`The ${this.color} ${this.model}'s engine turned off.`);
        return this;
    }
}
//Vehicle on the lot
let carLot = [];
//New Vehicles 
const jeep = new Vehicle('Jeep', 'Wrangler', 'OD Green');
const porsche = new Vehicle('Porsche', '911', 'Matte Steel Gray');
const chevrolet = new Vehicle('Chevrolet', 'Corvette', 'Midnight Blue');
const toyota = new Vehicle('Toyota', 'Tacoma', 'Matte Black');
carLot.push(jeep);
carLot.push(porsche);
carLot.push(chevrolet);
carLot.push(toyota);
console.log(carLot);
///////////////////////////////////////////////////////////////////////////////
//Customers
class Customer {
    constructor(aName, anAge, aScore) {
        this.name = aName;
        this.age = anAge;
        this.creditScore = aScore;
    }
    customerInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    customerScore() {
        console.log(`This customers credit score it ${this.creditScore}`);
        return this.creditScore;
    }
    carChoice(obj) {
        let x = carLot.filter(car => {
            return car === obj;
        });
        console.log(`The customer chose a(n) ${obj.color} ${obj.type} ${obj.model}.`);
        return x;
    }
}
//New Customers
const custo1 = new Customer('Sean Spencer', 28, 470);
const custo2 = new Customer('Burton Guster', 29, 780);
console.log(custo1, custo2);
//This function will check if the customer is qualified to make a purchase
const qualifyChecker = (Customer) => {
    if (Customer.age > 18 && Customer.creditScore > 670) {
        console.log('You qualify to purchase a car from this dealership');
    }
    else {
        console.log("Sorry, but you don\n't qualify at this moment in time to make a purchase from this dealership.");
    }
};
qualifyChecker(custo2);
//customer choose a vehicle
console.log(custo2.carChoice(jeep));
