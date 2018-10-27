import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Home from '../home/Home'

export default () => 

    <Switch>
        <Route exact path='/' component={Home}/>
        <Redirect from='*' to='/'/>
    </Switch>