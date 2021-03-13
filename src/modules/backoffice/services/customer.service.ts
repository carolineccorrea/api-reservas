import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICustomer } from "../interfaces/customer.interface";
import { Car } from "../models/car.model";
import { Customer } from "../models/customer.model";

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly model: Model<ICustomer>) { }

    async create(data: Customer): Promise<ICustomer> {
        const customer = new this.model(data);
        return await customer.save();
    }

    async createCar(document: string, data: Car): Promise<ICustomer> {
        const options = { upsert: true, new: true };
        return await this.model.findOneAndUpdate({ document }, {
            $push: {
                cars: data,
            },
        }, options);
    }
}