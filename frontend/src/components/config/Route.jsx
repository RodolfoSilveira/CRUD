import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Home from '../home/Home'
import Stock from '../stock/Stock'

export default () => 

    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/stock' component={Stock}/>
        <Redirect from='*' to='/'/>
    </Switch>