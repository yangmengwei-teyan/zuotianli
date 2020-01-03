import { Switch, Redirect, Route } from 'react-router-dom'
import React from 'react'
export default (props) => {
    let routes = props.routes
    return (
        <Switch>
            {
                routes.map((item, index) => item.redirect ? <Redirect key={index} to={item.redirect} /> : 
                <Route key={index} path={item.path} component={item.component}/>)
            }
        </Switch>
    )
}