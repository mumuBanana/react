import React from "react"

class Item extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            onEdit : false
        }
    }
    //显示内容，根据是否处于编辑状态返回一个文本框或者b标签
    showContent(){
        if(this.state.onEdit){
            return <input autoFocus ref="txt" type="text" onBlur={(this.blurhandler).bind(this)} />
        } else {
            return <b>{this.props.item.content}</b>
        }
    }
    //双击事件处理函数
    handler(){
        this.setState({
            onEdit : !this.state.onEdit
        })
    }
    //blur处理函数
    blurhandler(){
        this.setState({
            onEdit : false
        })
        //这里发送action
        this.props.actions.updateItem(this.refs.txt.value , this.props.item.id)
    }
    
    removerItem(){
        this.props.actions.removerItem(this.props.item.id)
    }

    changeItem(){
        this.props.actions.changeItem(this.props.item.id)
    }
    render(){
        return (
            <div>
               <input type="checkbox" checked={this.props.item.done ? "checked" : ""} onChange={(this.changeItem).bind(this)}/>
               <span onDoubleClick={(this.handler).bind(this)} className={this.props.item.done ? "done" : ""}>
                    {this.showContent()}
               </span>
               <input type="button" value="X" onClick={(this.removerItem).bind(this)} />
            </div>
        )
    }
}
export default Item