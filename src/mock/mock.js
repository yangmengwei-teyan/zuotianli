import Mock from "mockjs"
import data from "./index.js"
Mock.mock("/add",()=>{
    return data[1]
})
Mock.mock("/list",data)