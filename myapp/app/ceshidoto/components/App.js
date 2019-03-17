import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import reducer from "../reducers/index.js"
import Header from "./Header.js"
import Main from "./Main.js"
import "../css/todo.less"

let store = createStore(reducer,applyMiddleware(createLogger()))

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Header />
            <Main />
        </div>
    </Provider>,
    document.getElementById("root")
)