import React from 'react'
import {Link} from 'react-router-dom'

export default () =>

    <nav className='menu'>
        <ul>
            <li>
                <Link to='/'><i className='fa fa-home pr-1'></i>Home</Link>         
            </li>
            <li>
                <Link to='/stock'><i className='fa fa-dollar pr-1'></i>Caixa</Link>
            </li>
        </ul>
    </nav>