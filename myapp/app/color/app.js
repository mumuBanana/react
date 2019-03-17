import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "./actions.js"
import "./color.less"

class App extends React.Component{
    render (){
        let arr = ["r","g","b"].map((item,index)=>{
            return <li key={index}>
                        <input 
                        type="range" 
                        min="0" 
                        max="255" 
                        value={this.props[item]} 
                        onChange={(e)=>this.props.actions.changeNumber(item,e.target.value)}/>
                    </li>
        })
        return (
            <div>
                <div className="box" style={{"backgroundColor":`rgb(${this.props.r},${this.props.g},${this.props.b})`}}></div>
                <div>
                    {arr}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
    return {
        actions : bindActionCreators(actions,dispatch)
        // change: (rgb,value) => {
        //     dispatch({
        //         type: "CHANGE",
        //         rgb,
        //         value
        //     })
        // }
    }
}

export default connect(
    // state => state,
    mapStateToProps,
    mapDispatchToProps
)(App)