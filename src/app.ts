//imports
import { Vehicle } from './classes/vehicle.js'
import { Customer } from './classes/customer.js';


//Vehicle on the lot
export let carLot: Vehicle[] = [];


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




//New Customers
const custo1 = new Customer('Sean Spencer', 28, 470);
const custo2 = new Customer('Burton Guster', 29, 780);


console.log(custo1, custo2);





//This function will check if the customer is qualified to make a purchase
const qualifyChecker = (Customer: {age: number, creditScore: number }): void => {

    if(Customer.age > 18 && Customer.creditScore > 670) {

        console.log('You qualify to purchase a car from this dealership');
    
    } else {
        
        console.log("Sorry, but you don\n't qualify at this moment in time to make a purchase from this dealership.")
    
    }

    

}

qualifyChecker(custo2);




//customer choose a vehicle
console.log(custo2.carChoice(jeep));