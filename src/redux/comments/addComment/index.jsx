import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    addComment: ['comment'],
})

export const addCommentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    commentArr: []
}


/* ------------- Reducers ------------- */

const addComment = (state, { comment }) => {
    return {
        ...state,
        commentArr: [...state.commentArr, comment]
    }
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_COMMENT]: addComment,
})