import { ReactNode, createContext, useEffect, useState } from "react";
import { IUserState } from "../types/user-state.interface";
import { IUserContext } from "../types/user-context.interface";
import { UserService } from "../service/user.service";

const defaultUserState:IUserState = {
    users:[],
    isLoading:false,
    errors:undefined,
    isSubmiting:false,
    selectedId:undefined
}

const defaultState:IUserContext = {
    state:defaultUserState,
    setState:() => null
}

export const UserContext = createContext<IUserContext>(defaultState)

export const UserProvider = ({children}:{children:ReactNode}) => {
   const [state,setState] = useState<IUserState>(defaultUserState)

   useEffect(() => {
    setState({
        ...state,
        isLoading:true
    })
      const loadUsers = async () => {
        try {
            const {data:users} = await UserService.getAllUsers()
            setState((state:IUserState) => ({
                ...state,
                users:users,
                isLoading:false
            }))
        } catch (error:any) {
            setState((state) => ({
                ...state,
               errors:error.response.data.message
           }))
        }
      }
      loadUsers()
   },[])

   const value = {
    state,
    setState
   }

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
} 