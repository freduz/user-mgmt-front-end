import React from 'react'
import './button.styles.css'

interface IButtonProps {
    className:string;
    name:string;
    type?:"button" | "submit" | "reset" | undefined;
    handler?:React.EventHandler<React.MouseEvent<HTMLButtonElement>>
}

const Button:React.FC<IButtonProps> = ({name,className,handler,type="button"}) => {
  return (
    <button type={type} className={className} onClick={handler}>{name}</button>
  )
}

export default Button