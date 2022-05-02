import {combineReducers} from 'redux'
import { BlogReducer } from './BlogReducer'

export default combineReducers({
    blogs: BlogReducer,
})
