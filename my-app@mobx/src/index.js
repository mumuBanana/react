import React from 'react'  
import ReactDOM from 'react-dom'  
import Test from './app/test'
import { Provider } from "mobx-react"
import stores from './store/index'

ReactDOM.render(
    <Provider stores={stores}>
        <Test />
    </Provider>,
    document.getElementById('root')
);