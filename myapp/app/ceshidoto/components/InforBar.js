import React from "react"

class InforBar extends React.Component{
    countDone(){
        let sum = 0
        this.props.todos.forEach((item)=>{
            item.done && sum++
        })
        return sum
    }
    render(){
        return (
            <div>
                共{this.props.todos.length}条
                已经完成{this.countDone()}条
                没完成{this.props.todos.length - this.countDone()}条
            </div>
        )
    }
}
export default InforBar