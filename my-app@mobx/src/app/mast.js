import React from 'react'
import {observer, inject} from 'mobx-react';

@inject('stores') 
@observer
class Mast extends React.Component {
    constructor(props) {
        super(props);
    }
    show(){
        let imgStyle = {
            "width" : "20px",
            "height" : "20px",
            "verticalAlign" : "middle"
        }

        let liStyle = {
            "listStyle" : "none",
            "float" : "left"
        }
        const { mast } = this.props.stores;
        return mast.list.slice().map((item) => {
            return !item.aitd ? 
                   <li 
                        style={liStyle} 
                        // onClick={mast.doubleClickHandle.bind(this,item.id)}
                        id={item.id} 
                        key={item.id}
                    >
                        <img src={item.src} alt="" style={imgStyle}/>
                        {item.name}
                    </li>
                    : null
        })
    }
 
    render() {
        return (
            <div>
                <ul>
                    {this.show()}
                </ul>
            </div>
        );
    }
}
 
export default Mast;
 