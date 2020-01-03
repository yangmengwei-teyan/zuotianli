import Add from "../views/Add.js"
import Sub from "../views/Sub.js"
import Mul from "../views/Mul.js"
import Com from "../views/Com.js"
import Home from "../views/Home.js"
const routes=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/add',
        component:Add
    },
    {
        path:'/sub',
        component:Sub
    },
    {
        path:'/mul',
        component:Mul
    },
    {
        path:'/com',
        component:Com
    },{
        redirect:'/home'
    }
]

export default routes