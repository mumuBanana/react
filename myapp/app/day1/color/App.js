import React from "react"
import MyColor from "./Color.js"
import "./color.less"

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            r : 0,
            g : 0,
            b : 0
        }

        //三个组件的实例
        this.Mycolors = ["r","g","b"].map((item,index)=>{
            return <MyColor key={index} v={this.state[item]} color={item} setColor={(this.setColor).bind(this)} />
        })
    }

    //设置函数,可以设置color颜色为value
    setColor(color,value){
        this.setState({[color] : value})
    }

    render(){
        return (
            <div className="Bar_kaola">
                <div className="bar" style={{"backgroundColor":`rgba(${this.state.r},${this.state.g},${this.state.b})`}}></div>
                {this.Mycolors}
            </div>
        )
    }
} 

export default App