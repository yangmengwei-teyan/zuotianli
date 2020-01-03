import React, { Component } from "react"
import QuestionPicker from '../components/QuestionPicker'
import '../mock/mock.js'
import axios from 'axios'
import { connect } from 'react-redux'
class Question extends Component {
    render() {
        let obj=this.props.list.find(item=>item.type.toLowerCase()===this.props.match.params.type)
        return (
            <div className='quesion'>
                <div className='bar'> √：{obj.oknum}, ×：{obj.err}</div>
                <QuestionPicker />
            </div>
        )
    }

}
export default connect((state) => {
    return {
        list:state.list
    }
})(Question)