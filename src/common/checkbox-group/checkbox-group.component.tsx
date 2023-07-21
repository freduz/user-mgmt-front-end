import { ChangeEvent, FC } from "react";

interface ICheckBoxGroup {
    label:string;
    checked?:boolean;
    onChange?:(e:ChangeEvent<HTMLInputElement>) => void,
    name:string
}

const CheckBoxGroup:FC<ICheckBoxGroup> = ({onChange,checked,label,name}) => {
   return (
    <div className="check-box-group">
    <input type="checkbox" name={name} checked={checked} onChange={onChange} value={name} />
    <label>{label}</label>
  </div>
   )
}

export default CheckBoxGroup