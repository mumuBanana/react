import React from "react"
import ReactDOM from "react-dom"
import { createStore , applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { createLogger } from "redux-logger"
import reducer from "./app/todo/reducers/index.js"
import Header from "./app/todo/components/Header.js"
import Main from "./app/todo/components/Main.js"
import "./app/todo/css/style.less"

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