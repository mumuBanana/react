import React from 'react'
import { PropTypes } from 'prop-types'

class Day2 extends React.Component{
    constructor(props){
        super(props);
        //state是内部的，只有组件自己改变自己的state
        //在子组件中，props是只读的 ，不能修改props的值，如果需要修改，用state接收
        this.state = {
            a:2,
            c:props.c,
            text:""
        }

        this.change = this.change.bind(this)
    }
    add(){
        this.setState({
            a:this.state.a + 1
        })
    }

    //实现数据的双向绑定
    change(event){
        this.setState({
            text : event.target.value
        })
    }
    
    render(){
        return (
            <div>
                <hr />
                <h4>今天是第{this.state.a}天</h4>
                <button onClick={()=>this.add()}>天数+1</button>
                <p>{this.props.a}</p>
                <p>{this.props.b}</p>
                <p>{this.state.c}</p>
                <input type="button" value="按我" onClick={()=>{this.setState({c : this.state.c + 1})}} />
                <br />

                <input type="text" onInput={this.change} />
                <p>{this.state.text}</p>
           
                <button onClick={()=>{this.refs.box.style.backgroundColor = "red"}}>按我让盒子变色</button>
                <div ref="box" style={{"width":"100px","height":"100px","backgroundColor":"black"}}></div>
            </div>
        )
    }
}

//定义组件需要传入的参数
Day2.propTypes = {
    a : PropTypes.string.isRequired,
    b : PropTypes.string.isRequired,
    c : PropTypes.number.isRequired
}

export default Day2;