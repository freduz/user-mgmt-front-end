import http from '../config/http-config'
import { IUserRequest } from '../types/user-request.interface'
import { IUser } from '../types/user.interface'

export class UserService {
   public static async getAllUsers(){
     return await http.get<Array<IUser>>("user")
   }

   public static async getUser(id:number){
    return await http.get<IUser>(`user/${id}`)
   }

   public static async createUser(userData:IUserRequest){
    return await http.post<IUser>('user',userData)
   }

   public static async deleteUser(userId:number){
    return await http.delete<void>(`user/${userId}`)
   }

   public static async updateUser(userData:IUserRequest,userId:number){
    return await http.put<IUser>(`user/${userId}`,userData)
   }

   public static async runAction(userData:{userId:number,actions:Array<string>}){
    return await http.post<IUser>(`action`,userData)
   }
}