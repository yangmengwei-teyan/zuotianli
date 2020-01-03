import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import list from '../mock/index.js'
let reducer = (state = { list, question: {}}, action) => {
    let newstate = JSON.parse(JSON.stringify(state))
    console.log(newstate)
    switch (action.type) {
         case 'GET_QUESTION':{
            console.log(action.params,'==>params')
            let {type,id}=action.params
            newstate.question = newstate.list.find(item=>item.type.toLowerCase()===type).ti[id]
            return newstate
        }
        // 判断题的对错
        case 'CHECK_QUESTION':{
            let {type,id}=action.params 
            let {item}=action
            if(item.flag){
                newstate.list.find(item=>item.type.toLowerCase()===type).oknum++
            }else{
                newstate.list.find(item=>item.type.toLowerCase()===type).err++
            }
        }
        default: return newstate
    }
}
let store = createStore(reducer, applyMiddleware(thunk))
window.store = store
export default store