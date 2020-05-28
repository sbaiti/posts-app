import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    getAllPostsRequest: ['response'],
    getAllPostsSuccess: ['response', 'loading'],
    getAllPostsFailure: ['error'],
})

export const getAllPostsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    response: null,
    error: null,
})

/* ------------- Reducers ------------- */

const getAllPostsRequest = state => state.merge({ response: null })

const getAllPostsSuccess = (state, { response }) =>
    state.merge({
        error: false,
        response,
    })

const getAllPostsFailure = (state, { error }) => {
    const { response } = error
    return state.merge({
        error: true,
        response,
    })
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_ALL_POSTS_REQUEST]: getAllPostsRequest,
    [Types.GET_ALL_POSTS_SUCCESS]: getAllPostsSuccess,
    [Types.GET_ALL_POSTS_FAILURE]: getAllPostsFailure,
})
