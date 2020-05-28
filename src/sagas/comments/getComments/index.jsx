import { takeLatest, put, all } from 'redux-saga/effects'
import getCommentsActions, { getCommentsTypes } from '../../../redux/comments/getComments'
import { Get } from '../../../server/axios'

function* getCommentsSagas({ response }) {
    try {
        const res = yield Get(`/posts/${response.idPost}/comments`)
        if (res.status === 200 || res.status === 201) {
            yield all([
                yield put(getCommentsActions.getCommentsSuccess(res.data)),
            ])
        } else {
            yield put(getCommentsActions.getCommentsFailure(res))
        }
    } catch (error) {
        yield put(getCommentsActions.getCommentsFailure(error))
    }
}

export function* getCommentsSaga() {
    yield takeLatest(getCommentsTypes.GET_COMMENTS_REQUEST, getCommentsSagas)
}
