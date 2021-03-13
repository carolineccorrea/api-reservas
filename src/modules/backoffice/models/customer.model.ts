import { IUser } from '../interfaces/user.interface';
import { Car } from './car.model';
import { User } from './user.model';

export class Customer {

        constructor(
                public name: string,
                public document: string,
                public cars: Car[],
                public email: string,
                public user: IUser) {
                //super()
        }
}
