import React from 'react'
import {render} from 'react-dom'
import configureStore from './stores/store'
import { Provider } from 'react-redux'
import App from './components/app'
import stylus from '../stylus/main'

let initialState = {
    todos: [{
            id: 0,
            completed: 0,
            text: 'Initial todo for demo purposes'
        }],
    user: {
        username: 'Ueslei',
        id: 27
    }
}

let store = configureStore(initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
