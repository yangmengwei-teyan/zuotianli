import Home from "../views/Home.js"
import Quesion from "../views/Quesion.js"

export default [
    {
        path:'/home',
        component:Home
    },{
        path:'/:type/:id',
        component:Quesion
    },{
        redirect:'/home'
    }
]