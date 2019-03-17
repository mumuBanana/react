import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/action.js"

class Header extends React.Component{
    add(){
        this.props.actions.addItem(this.refs.txt.value)
        this.refs.txt.value = ""
    }
    keydownHandler(e){
        if(e.keyCode == 13){
            this.add()
        }
    }
    render(){
        return (
            <div>
                待做事项 :{" "}
                <input type="text" ref="txt" onKeyDown={(this.keydownHandler).bind(this)} />
                {" "}
                <input type="button" value="添加" onClick={(this.add).bind(this)} />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        "actions" : bindActionCreators(actions,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(Header)