import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./app/redux/reducer.js"
import App from "./app/redux/App.js"

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById("root")
)