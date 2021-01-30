import { Car } from './car.model';

export class Customer {
    constructor(
        public name: string,
        public document: string,
        public cars: Car[],
        public email: string,
        public password: string,
        public active: boolean,
    ) { }

}
