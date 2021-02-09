import { Document } from "mongoose";

export class User {
   
    /**
     *
     */
    constructor(
        public username: string,
        public password: string,
        public active: boolean, 
    ) {
       // super();
    }
}
