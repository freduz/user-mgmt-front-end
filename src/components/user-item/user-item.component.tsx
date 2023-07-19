import { FC } from "react";
import { IUser } from "../../types/user.interface";
import Button from "../../common/button/button.component";

interface IUserItemProps {
    user:IUser
}

const UserItem:FC<IUserItemProps> = ({user}) => {
    return (
        <tr className="border-b dark:border-grey-300">
        <td className="whitespace-nowrap px-6 py-4">{user.firstName} {user.lastName}</td>
        <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className='flex gap-3'>
          <Button className='btn btn-primary' name='Edit'/>
          <Button className='btn btn-danger' name='Delete'/>
          <Button  className='btn btn-success' name='Run action'/>
          </div>
        </td>
      </tr> 
    );
}

export default UserItem