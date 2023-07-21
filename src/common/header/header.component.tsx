import React, { useContext } from 'react'
import './header.styles.css'


import Button from '../button/button.component'
import { ModelContext } from '../../context/modal.context'
import { UserContext } from '../../context/user.context'

const Header = () => {

  const {setIsOpen} = useContext(ModelContext);
  const {setState} = useContext(UserContext)

  const toggleModal = () => {
     setState((state) => ({...state,selectedId:undefined}))
     setIsOpen({
      'add_modal' : true,
      'run_modal':false
     });
  }



  return (
    <div className='flex justify-between'>
        <h1 className='heading-title'>Users</h1>
        {}
        <Button name='Create' className='btn btn-default' handler={toggleModal}/>
    </div>
  )
}

export default Header