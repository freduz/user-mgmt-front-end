import http from '../config/http-config'
import { IUser } from '../types/user.interface'

export class UserService {
   public static async getAllUsers(){
     return await http.get<Array<IUser>>("user")
   }

   public static async getUser(id:number){
    return await http.get<IUser>(`user/${id}`)
   }

   public static async createUser(userData:Partial<IUser>){
    return await http.get<IUser>('user')
   }
}