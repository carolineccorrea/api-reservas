import { Document } from 'mongoose';
import { Car } from '../models/car.model';
import { User } from '../models/user.model';
export interface ICustomer extends Document {
        name: string;
        document: string;
        cars: Car[];
        email: string;
        user: User;

}