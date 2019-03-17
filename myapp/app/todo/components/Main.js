import React from "react"
import { bindActionCreators } from "redux";
import InforBar from "./InforBar.js"
import { connect } from "react-redux";
import Item from "./Item.js"
import * as actions from "../actions/action.js"

class Main extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <ul>
                       {this.props.todos.map((item,index)=>{
                           return <Item key={index} item={item} actions={this.props.actions}/>
                       })}
                    </ul>
                </div>

                <InforBar todos={this.props.todos} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        "todos" : state.todoReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        "actions" : bindActionCreators(actions,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)