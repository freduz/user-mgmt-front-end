import { FC, useContext } from "react";
import { IUser } from "../../types/user.interface";
import Button from "../../common/button/button.component";
import { UserService } from "../../service/user.service";
import { toast } from "react-toastify";
import { UserContext } from "../../context/user.context";
import { ModelContext } from "../../context/modal.context";

interface IUserItemProps {
    user:IUser
}

const UserItem:FC<IUserItemProps> = ({user}) => {

  const {setState} = useContext(UserContext)
  const {setIsOpen} = useContext(ModelContext)


  const deleteUser = async () =>{
      try {
        await UserService.deleteUser(user.id)
        setState((state) => {
          return  {
            ...state,
            users:state.users.filter(existingUser => existingUser.id!==user.id),
          }
        }) 
        toast.error("User deleted succesfully");
      } catch (error) {     
      }
  }

  const editUser = () => {
     setState((state) => ({...state,selectedId:user.id}))
     setIsOpen(({
      'add_modal' : true,
      'run_modal' : false
    }))
  }

  const runAction = () => {
    setState((state) => ({...state,selectedId:user.id}))
    setIsOpen(({
      'add_modal' : false,
      'run_modal' : true
    }))
  }




    return (
        <tr className="border-b dark:border-grey-300">
        <td className="whitespace-nowrap px-6 py-4">{user.firstName} {user.lastName}</td>
        <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className='flex gap-3'>
          <Button className='btn btn-primary' name='Edit' handler={editUser}/>
          <Button className='btn btn-danger' name='Delete' handler={deleteUser}/>
          <Button  className='btn btn-success' name='Run action' handler={runAction}/>
          </div>
        </td>
      </tr> 
    );
}

export default UserItem