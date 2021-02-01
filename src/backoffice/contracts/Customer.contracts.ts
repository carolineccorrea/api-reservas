import { Injectable } from "@nestjs/common";
import { Validator } from "src/utils/validator";
import { Customer } from "../models/customer.model";
import { Contract } from "./Contract";

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];
    validate(model: Customer): boolean {
       const validator = new Validator();

       validator.hasMinLen(model.name, 5, "nome invalido" )
       validator.isEmail(model.email, "Email invalido" )
       validator.hasMinLen(model.name, 5, "Nome invalido" )

       this.errors = validator.errors;

       return validator.isValid();
    }

}