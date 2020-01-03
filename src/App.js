import React, { Component } from "react"
import RouterView from './router/routeView'
import routes from './router/routerList.js'
import store from './store'
import  {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
export default class App extends Component {
    render() {
        return  <Provider store={store}>
        <BrowserRouter>
          <RouterView routes={routes} />
        </BrowserRouter>
         
           </Provider>
    }
}