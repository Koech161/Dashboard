import React, { useState } from 'react'
import '../App.css'
import { BsCart3, BsFillArchiveFill, BsMenuButtonWideFill,BsListCheck,BsFillGearFill, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsFillPeopleFill, BsMenuButton, BsJustifyLeft } from 'react-icons/bs'
const SideBar = () => {
    const [expand, setExpand]=useState(false)
  return (
   <aside id='sidebar' className={expand ? 'collapse' : ''}>
    <div className='sidebar-title'>
    
    {!expand && (
        <div className='sidebar-brand'>
    <BsCart3 className='icon'/> SHOP
        </div>)}
        <span onClick={()=>setExpand(prev=>!prev)} className='icon close_icon'
           aria-label={expand ? 'collapse sidebar' : 'Expand sidebar'} ><BsJustifyLeft/></span>
        
    </div>
    {!expand &&  (<ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsGrid1X2Fill className='icon'/>Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillArchiveFill className='icon'/>Products
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGrid3X3GapFill className='icon'/>Categories
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillPeopleFill className='icon'/> Customers
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsMenuButtonWideFill  className='icon'/>Inventory
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsListCheck className='icon'/>Report
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Settings
            </a>
        </li>
    </ul>)}
    
   </aside>
  )
}

export default SideBar
