import React, {Component} from 'react'
import {HashRouter} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reactstrap'
import 'font-awesome/css/font-awesome.min.css'
import Header from '../templates/Header.jsx'
import Menu from '../templates/Menu.jsx'
import Footer from '../templates/Footer.jsx'
import Router from '../config/Route'

export default class App extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            icon: 'left'
        }
        
        this.ocultar = this.ocultar.bind(this)
    }

    ocultar(){
        const menu = document.querySelector('.menu')
        const visible = menu.style.display
        const principal = document.getElementById('principal')

        if(visible === 'none'){
            menu.style.display = 'block'
            principal.classList.remove('oculto')
            this.setState({icon: 'left'})
        }else{
            menu.style.display = 'none'
            principal.classList.add('oculto')
            this.setState({icon: 'down'})
        }
    }
    
    render(){
        return(
            <HashRouter>
                <div className='app' id='principal'>
                    <Header title='Gerenciamento de Mercadorias' action={this.ocultar} icon={this.state.icon}/>
                    <Router/>
                    <Menu/>
                    <Footer/>
                </div>
            </HashRouter>
        )
    }
}

