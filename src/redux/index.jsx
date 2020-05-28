import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'

const containersReducer = {
    posts,
    comments
}

const appReducer = combineReducers({
    ...containersReducer
})

export const createGlobalReducer = (state, action) => {
    return appReducer(state, action)
}

export default createGlobalReducer