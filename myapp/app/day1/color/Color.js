import React from "react"

class MyColor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            v : props.v
        }
        //绑定change的this
        this.change = this.change.bind(this)
        
        this.setColor = props.setColor;
    }

    //改变
    change(event){
        this.setState({v : parseInt(event.target.value)})
        this.setColor(this.props.color ,this.state.v)
    }

    render(){
        return (
            <div>
                <span className="rgbTitle">{this.props.color}</span>
                <input type="range" min="0" max="255" value={this.state.v} onChange={this.change} />
                <input type="number" min="0" max="255" style={{"width":"50px","position":"absolute"}} value={this.state.v} onChange={this.change} />
            </div>
        )
    }
}

export default MyColor