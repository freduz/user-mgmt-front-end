import { IUser } from "./user.interface";

export interface IUserState{
    users:IUser[];
    isLoading:boolean;
    errors:string | undefined
}