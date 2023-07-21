import React, { createContext, useState } from "react";
import { IModelContext } from "../types/model-context.interface";


const defaultState:IModelContext = {
isOpen:{
    "add_modal" : false,
    "run_modal" : false
},
setIsOpen:() => null
}

export const ModelContext = createContext<IModelContext>(defaultState);


export const ModelProvider= ({children}:{children:React.ReactNode}) => {
    const [isOpen,setIsOpen] = useState<{}>({});
    const value = {
        isOpen,
        setIsOpen
    }
    return (
        <ModelContext.Provider value={value}>{children}</ModelContext.Provider>
    )
}