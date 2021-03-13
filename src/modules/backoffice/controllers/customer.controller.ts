import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
    UseInterceptors,
} from '@nestjs/common';
import { CreateCustomerContract } from '../contracts/Customer.contracts';
import { CreateCustomerDTO } from '../dto/create-customer-dto';
import { ResultDto } from '../dto/result.dto';
import { ValidatorInterceptor } from '../interceptors/validator.interceptor';
import { Car } from '../models/car.model';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';
import { User } from '../models/user.model';
import { AccountService } from '../services/account.service';
import { CustomerService } from '../services/customer.service';

@Controller('v1/customers')
export class CustomerController {

    constructor(private readonly accountService: AccountService,
        private readonly customerService: CustomerService) {
    }


    @Get()
    async get() {
        return new Result(null, true, [], null);
    }
    @Get(':document')
    async getById(@Param('document') document: string) {
        return new Result(null, true, {}, null);
    }
    @Post()
    //@UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    async post(@Body() model: CreateCustomerDTO) {
        try {
            const newUser = new User(model.document, model.password, true, ['user'])
            const user = await this.accountService.create(newUser);
            const customer = new Customer(model.name, model.document, [], model.email, user);
            const res = await this.customerService.create(customer)
            return new Result('Cliente criado com sucesso', true, res, null);
        } catch (error) {
            throw new HttpException(new Result('Nao foi possivel realizar seu cadastro', false, null, error), HttpStatus.BAD_REQUEST)
        }
    }
    // criar um Carro
    @Post(':document/cars')
    async createCar(@Param('document') document, @Body() model: Car) {
        try {
            await this.customerService.createCar(document, model);
            return new ResultDto(null, true, model, null);
        } catch (error) {
            throw new HttpException(new ResultDto('Não foi possível adicionar seu carro', false, null, error), HttpStatus.BAD_REQUEST);
        }

    }

    @Put(':document')
    async put(@Param('document') document, @Body() body) {
        return new Result('Cliente atualizado com sucesso', true, body, null)
    }

    @Delete(':document')
    async delete(@Param('document') document) {
        return new Result('Cliente deletado com sucesso', true, null, null);
    }
}
