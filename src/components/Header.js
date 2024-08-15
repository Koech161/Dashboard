import React from 'react'
import '../App.css'
import {   BsPersonCircle, BsJustify, BsSearchHeartFill, BsFillBellSlashFill, BsFillEnvelopeAtFill} from 'react-icons/bs'
const Header = () => {
  return (
    <header className='header'>
        <div className='menu-icon'>
          <BsJustify className='icon'/>
    {/* <BsJ className='icon'/> */}
        </div>
        <div className='header-left'> 
    <BsSearchHeartFill className='icon'/>
        </div>
        <div className='header-right'> 
    <BsFillBellSlashFill className='icon'/>
    <BsFillEnvelopeAtFill className='icon' />
    <BsPersonCircle className='icon'/>
        </div>

    </header>
  )
}

export default Header
