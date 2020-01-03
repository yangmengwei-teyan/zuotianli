import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
class QuestionPicker extends Component {
    render() {
        console.log(this.props.question)
        let { question, check_question, match: { params } } = this.props
        let obj = this.props.list.find(item => item.type.toLowerCase() === this.props.match.params.type)
        return (
         <div>
         <h3>{question.question}</h3>
         <div>
               {
                   question.answer && question.answer.map((item, index) => <p key={index}
                       onClick={() => {
                           check_question(params, item)
                           //跳路由
                           let id = Number(params.id)
                           if (id < obj.ti.length - 1) {
                               this.props.history.push(`/${params.type}/${id + 1}`)
                           } else {
                               setTimeout(() => {
                                   this.props.history.push('/home')
                               }, 500)
                           }

                       }}
                   >
                       {item.num}:
                      {item.answers}
                   </p>)
               }</div></div>
          
        )
       
    }
    componentDidMount() {
        console.log(this.props.match.params)

        this.props.get_question(this.props.match.params)
    }

    componentWillReceiveProps(nextProps) {
        //作用：当外部传来的props发生改变时调用，所以能时刻监听动态路由的改变，进而做相应的功能
        if (nextProps.match.params.id !== this.props.match.params.id) {
            //判断语句一定要有，当路由改变时才调用方法，否则就是死循环
            this.props.get_question(nextProps.match.params)
        }

    }
}
export default connect((state) => {
    return {
        question: state.question,
        list: state.list
    }
}, (dispatch) => {
    return {
        get_question(params) {
            dispatch({ type: 'GET_QUESTION', params })
        },
        check_question(params, item) {
            dispatch({ type: 'CHECK_QUESTION', params, item })

        }
    }
})(withRouter(QuestionPicker))


