import React from 'react'
import {observer, inject} from 'mobx-react';
import Mast from './mast'

@inject('stores') 
@observer
class Test extends React.Component {
    render() {
        const { test } = this.props.stores;
        return (
            <div>
                <p>姓名 ： {test.name}
                {" "}<input type="text" onBlur={test.changeName} ref="name" placeholder="修改名称"/>
                </p>
                <p>年龄 ： {test.age}
                {" "}<button onClick={test.changeAge}>年龄加1</button>
                </p>
                <Mast />
            </div>
        );
    }
}
 
export default Test;
 