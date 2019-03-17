import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "./actions.js"

class App extends React.Component{
    addNumber(){
        let numberText = parseInt(this.refs.number.value)
        this.props.actions.addText(numberText)
    }
    render(){
        return(
            <div>
                <h1>{this.props.v}</h1>
                <input type="button" value="+" onClick={this.props.actions.addMore} />
                <input type="button" value="-" onClick={this.props.actions.removeMore} />
                <p>
                    <input type="number" ref="number" />
                    <input type="button" value="加我这个数" onClick={(this.addNumber).bind(this)} />
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        v : state.v
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions : bindActionCreators(actions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)