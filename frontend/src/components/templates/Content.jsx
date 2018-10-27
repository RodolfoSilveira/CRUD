import React from 'react'
import './Content.css'
import PageTitle from './PageTitle'

export default props => 
    <main className='content'>
        <PageTitle title={props.title}/>
    </main>