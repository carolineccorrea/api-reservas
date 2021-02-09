import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { CreateCustomerDTO } from "../dto/create-customer-dto";
import { Customer } from "../models/customer.model";
import { User } from "../models/user.model";

@Injectable()
export class AccountService {
    constructor(
      //  @InjectModel('Customer') private readonly customerModel: Model<Customer>,
        @InjectModel('User') private readonly userModel: mongoose.Model<User>
    ) { }

    async create(data: User): Promise<User> {
        const user = new this.userModel(data);
        return await user.save();
    }

    /*
  async criar(createCustomerDTO: CreateCustomerDTO): Promise<User> {
    const user = new this.userModel(createCustomerDTO);
    return await user.save();
  }
  */
 async criar(data: User): Promise<User> {
  const createdUser = new this.userModel(data);
  return await createdUser.save();
}

    async findByUsername(username): Promise<User> {
        return await this.userModel
            .findOne({ username: username })
            .exec();
    }

    async update(username: string, data: any): Promise<User> {
        return await this.userModel.findOneAndUpdate({ username }, data);
    }
}
