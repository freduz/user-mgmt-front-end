import React, { useContext } from 'react'
import './header.styles.css'


import Button from '../button/button.component'
import { ModelContext } from '../../context/modal.context'

const Header = () => {

  const {toggle} = useContext(ModelContext);

  return (
    <div className='flex justify-between'>
        <h1 className='heading-title'>Users</h1>
        <Button name='Create' className='btn btn-default' handler={toggle}/>
    </div>
  )
}

export default Header