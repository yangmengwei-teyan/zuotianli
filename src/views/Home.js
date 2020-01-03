import React,{Component} from "react"
import {NavLink} from 'react-router-dom'
export default class Home extends Component{
    render(){
        return(
            <div className='home'>
               <NavLink to='/add/0'>加法</NavLink>
               <NavLink to='/sub/0'>减法</NavLink>
               <NavLink to='/mul/0'>乘法</NavLink>
               <NavLink to='/com/0'>比较</NavLink>
            </div>
        )
    }
}