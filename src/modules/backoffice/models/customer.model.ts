import { Car } from './car.model';
import { User } from './user.model';

export class Customer {
        public name: string;
        public document: string;
        public cars: Car[];
        public email: string;
        public user: User;

}
