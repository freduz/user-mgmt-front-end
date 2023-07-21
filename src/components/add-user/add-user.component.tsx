import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import {toast} from 'react-toastify'
import { ModelContext } from "../../context/modal.context";
import Input from "../../common/input/input.component";

import './add-user.styles.css'
import Button from "../../common/button/button.component";
import CheckBoxGroup from "../../common/checkbox-group/checkbox-group.component";
import { UserService } from "../../service/user.service";
import { IUserRequest } from "../../types/user-request.interface";
import { UserContext } from "../../context/user.context";
import { IUser } from "../../types/user.interface";

const defaultForm:IUserRequest = {
  firstName:'',
  lastName:'',
  email:'',
  actions:[] as string[]
}

const AddUser:React.FC = () => {
   const {isOpen,setIsOpen} = useContext(ModelContext)
   const {state,setState}  = useContext(UserContext)

   const [formFields,setFormFields] = useState(defaultForm);
   let {firstName,lastName,email,actions} = formFields;
   const handleChange:(event:ChangeEvent<HTMLInputElement>) => void = (e) =>{
       const {name,value} = e.target as HTMLInputElement;
       setFormFields((formFields) => ({
        ...formFields,
        [name]:value
       }))
   }

   useEffect(() => {
    const userData:IUser  = state.users.find(user => user.id === state.selectedId) as IUser
    const existingActions = userData?.actions.map((action:any) => {
        return action.action
    })
    const prefillForm:IUserRequest = {
      ...userData,
      actions:existingActions
    }
    setFormFields(prefillForm);


},[state.selectedId])

   const handleChecked:(event:ChangeEvent<HTMLInputElement>) => void = (e) => {
    const {checked,value} = e.target as HTMLInputElement;
    if(checked) {
      setFormFields({
        ...formFields,
        actions:formFields.actions ? [...formFields?.actions,value] : []
      })
    }else{
      setFormFields({
        ...formFields,
        actions:formFields?.actions?.filter(action => action!==value)
      })
    }
   }

   const handleSubmit:(event:FormEvent<HTMLFormElement>) => void = async (e) => {
      setState((state) => ({
        ...state,
        isSubmiting:true
      }))
      try {
        e.preventDefault();
        const {data:newUser} = await UserService.createUser(formFields)
        setState((state) => ({
          ...state,
          users:[...state.users,newUser],
          isSubmiting:false
        }))

        toast.success('User added successfully!')
        setIsOpen(({
          add_modal : false,
          run_modal : false
        }))
      } catch (error:any) {
        toast.error(error.response.data.message ?? 'Bad Request')
      } 
   }

   const updateUser:(event:FormEvent<HTMLFormElement>) => void = async (e) => {
    setState((state) => ({
      ...state,
      isSubmiting:true
    }))
     try {
         e.preventDefault();
         const {data:updatedUser} = await UserService.updateUser(formFields,state.selectedId as number)
         setState((state) => {
          return {
            ...state,
            users:state.users.map(user => user.id === updatedUser?.id ? updatedUser : user),
            isSubmiting:false
          }
         })
         setIsOpen(({
          add_modal : false,
          run_modal : false
        }))
     } catch (error:any) {
      toast.error(error.response.data.message ?? 'Bad Request')
     }
   }

   const closeModal = () => {
      setFormFields(defaultForm)
      setIsOpen(({
        add_modal : false,
        run_modal : false
      }))
   }

     return (
    <>
 
      { isOpen.add_modal ? (
        <>
          <div id="modal" className="modal">
            <div className="modal-content">
               <div className="modal-header">
               <h2>{state.selectedId ? 'Edit User' : 'Create user'}</h2>
               <span className="close" onClick={closeModal}>&times;</span>
               </div>
              <div className="modal-from">
                <form onSubmit={ state.selectedId ? updateUser : handleSubmit}>
                    <div className="input-area">
                    <Input type="text" label="Firstname" name="firstName" value={firstName} handler={handleChange}/>
                    <Input type="text" label="Lastname" name="lastName"  value={lastName} handler={handleChange}/>
                    <Input type="email" label="E-mail" name="email" value={email} handler={handleChange}/>
                    </div>
                    <h2 className="action-title">Actions</h2>
                    <div className="actions-area">
                    <CheckBoxGroup label="Create item" onChange={handleChecked} checked={actions?.includes('create-item') ? true : false} name="create-item" />
                    <CheckBoxGroup label="Delete item" onChange={handleChecked}  checked={actions?.includes('delete-item') ? true : false} name="delete-item" />
                    <CheckBoxGroup label="View item" onChange={handleChecked}  checked={actions?.includes('view-item') ? true : false} name="view-item" />
                    <CheckBoxGroup label="Move item" onChange={handleChecked}  checked={actions?.includes('move-item') ? true : false} name="move-item"/>
                    </div>
                    <div className="button-area">
                      <Button name="Cancel" handler={closeModal} className="btn btn-grey"/>
                      <Button name={state.selectedId ? "Save":"Create"} type="submit" className="btn btn-primary"/>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddUser;