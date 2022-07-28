//imports
import { carLot } from "../app.js";
import { Vehicle } from "./vehicle.js";

//Customer class
export class Customer {

    readonly name: string;
    readonly age: number;
    readonly creditScore: number;

    constructor(aName: string, anAge: number, aScore: number) {

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

    carChoice(obj: Vehicle){
        
       let x = carLot.filter(car => {
            return car === obj;
        })

        console.log(`The customer chose a(n) ${obj.color} ${obj.type} ${obj.model}.`)
        return x
    }

}