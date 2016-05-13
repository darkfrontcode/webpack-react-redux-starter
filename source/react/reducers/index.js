import {combineReducers} from 'redux'
import TodoReducer from './todo'
import UserReducer from './user'

const rootReducer = combineReducers({
    todos: TodoReducer,
    user: UserReducer
})

export default rootReducer
