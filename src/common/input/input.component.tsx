import { FC } from "react";

import './input.styles.css'

interface IInputProps{
    type:string;
    label:string;
    handler?:() => void
    className?:string
}

const Input:FC<IInputProps> = ({type,label,handler,className}) => {
      return (<>
           <div className="input_container">
            <label>{label}</label>
            <input type={type} className={className} onChange={handler}  />
           </div>
      </>)
}

export default Input;