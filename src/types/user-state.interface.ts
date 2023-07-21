import { IUser } from "./user.interface";

export interface IUserState{
    users:IUser[];
    isLoading:boolean;
    isSubmiting:boolean;
    errors:string | undefined,
    selectedId:number | undefined
}