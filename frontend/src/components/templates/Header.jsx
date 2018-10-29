import React, {Component} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import UserDropdown from './UserDropdown'


export default class Header extends Component {

    render(){
        return(
            <header className='header'>
                <Link to='#' className="toggle" onClick={this.props.action}>
                    <i className={`fa fa-angle-${this.props.icon}`}></i>
                </Link>
                <h1 className='title'><Link to='/'>{this.props.title}</Link></h1>
                <UserDropdown/>
            </header>
        )
    }
} 
    