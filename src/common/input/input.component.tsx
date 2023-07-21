import { ChangeEvent, FC } from "react";

import './input.styles.css'

interface IInputProps{
    type:string;
    label:string;
    handler?:(e:ChangeEvent<HTMLInputElement>) => void
    className?:string;
    name:string;
    value:string
}

const Input:FC<IInputProps> = ({handler,...rest}) => {
      return (<>
           <div className="input_container">
            <label>{rest.label}</label>
            <input {...rest} onChange={handler}  />
           </div>
      </>)
}

export default Input;