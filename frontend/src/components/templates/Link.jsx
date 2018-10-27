import React from 'react'
import {Link} from 'react-router-dom'

export default () =>

    <nav className='menu'>
        <ul>
            <li>
                <Link to='/'><i className='fa fa-home pr-1'></i>Home</Link>         
            </li>
            <li>
                <Link to='/'><i className='fa fa-truck pr-1'></i>Estoque</Link>
            </li>
        </ul>
    </nav>