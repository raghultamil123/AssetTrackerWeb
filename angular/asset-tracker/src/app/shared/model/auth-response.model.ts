import { User } from "./user.model";

export class AuthResponse{
    constructor(public userToken:string,public user:User){
        
    }
}