//Vehicule Class
export class Vehicle  {

    readonly type: string;
    readonly model: string;
    readonly color: string;

    constructor(aType: string, aModel:string, aColor: string){
        
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
