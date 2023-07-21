export interface IUser{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    actions:Action[]
}

type Action = {
    id:number;
    action:string
}