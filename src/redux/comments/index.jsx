import { combineReducers } from 'redux'
import { reducer as getComments } from './getComments'
import { reducer as addComment } from './addComment'

export default combineReducers({
    getComments,
    addComment
})
