import React from "react";
import { IUserState } from "./user-state.interface";

export interface IUserContext {
    state:IUserState;
    setState: React.Dispatch<React.SetStateAction<IUserState>>
}