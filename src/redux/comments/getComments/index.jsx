import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    getCommentsRequest: ['response'],
    getCommentsSuccess: ['response', 'loading'],
    getCommentsFailure: ['error'],
})

export const getCommentsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    response: null,
    error: null,
})

/* ------------- Reducers ------------- */

const getCommentsRequest = state => state.merge({ response: null })

const getCommentsSuccess = (state, { response }) =>
    state.merge({
        error: false,
        response,
    })

const getCommentsFailure = (state, { error }) => {
    const { response } = error
    return state.merge({
        error: true,
        response,
    })
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_COMMENTS_REQUEST]: getCommentsRequest,
    [Types.GET_COMMENTS_SUCCESS]: getCommentsSuccess,
    [Types.GET_COMMENTS_FAILURE]: getCommentsFailure,
})
