import React, { createContext, useState } from "react";

 interface IModelContext{
    isOpen:boolean,
    toggle?:() => void
}

const defaultState:IModelContext = {
isOpen:false,
toggle:() => null
}

export const ModelContext = createContext<IModelContext>(defaultState);



export const ModelProvider= ({children}:{children:React.ReactNode}) => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const toggle = () => {
        setIsOpen((isOpen) => !isOpen);
    }
    const value:IModelContext = {
        isOpen,
        toggle
    }
    return (
        <ModelContext.Provider value={value}>{children}</ModelContext.Provider>
    )
}