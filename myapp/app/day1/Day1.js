import React from "react"
import Day2 from "./Day2"
import { PropTypes } from "prop-types"

class Day1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a : 100
        }
    }

    //得到上下文 把当前的this.state.a的值 传给孙子组件
    getChildContext(){
        return {
            a : this.state.a
        }
    }

    haha(title){
        if(title == "篮球"){
            return (
                <ul>
                    <li>去玩儿</li>
                    <li>阿萨德</li>
                    <li>自行车</li>
                </ul>
            )
        }else if(title == "足球"){
            return (
                <ul>
                    <li>任天野</li>
                    <li>电饭锅</li>
                    <li>把你卖</li>
                </ul>
            )
        }
    }
    render(){
        let arr = ["胡子","虎子","瓠子","壶子"].map((item)=>{
            return <li key={item}>{item}</li>
        })
        return (
            <div>
                <h2>第一天</h2>
                <h3>我是react{5000+5000}</h3>
                {3 > 8 ? "a" : "b"}
                <ul>
                    {arr}
                </ul>
                {this.haha("篮球")}
                <Day2 a="66" b="77" c={88} />
            </div>
        )
    }
}

Day1.childContextTypes = {
    a : PropTypes.number.isRequired
}

export default Day1;