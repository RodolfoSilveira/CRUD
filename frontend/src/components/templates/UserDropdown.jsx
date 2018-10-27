import React from 'react'
import { Link } from 'react-router-dom'
import './UserDropdown.css'
import Gravatar from 'react-gravatar'

export default props =>

    <div className='user-dropdown'>
        <div className='user-button'>
            <span className='d-none d-sm-block'></span>
            <div className='user-dropdown-img'>
                <Gravatar email='user.email' alt='User'/>
            </div>
            <i className='fa fa-angle-down'></i>
        </div>
        <div className='user-dropdown-content'>
            <Link to='/admin'>
                <i className="fa fa-cogs"></i>Administração
            </Link>
            <Link to='/'>
                <i className='fa fa-sign-out'></i>Sair
            </Link>
        </div>
    </div>