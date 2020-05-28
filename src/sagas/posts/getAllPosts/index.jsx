import { takeLatest, put, all } from 'redux-saga/effects'
import getAllPostsActions, { getAllPostsTypes } from '../../../redux/posts/getAllPosts'
import { Get } from '../../../server/axios'

function* getAllPostsSagas() {
    try {
        const res = yield Get("/posts")
        if (res.status === 200 || res.status === 201) {
            yield all([
                yield put(getAllPostsActions.getAllPostsSuccess(res.data)),
            ])
        } else {
            yield put(getAllPostsActions.getAllPostsFailure(res))
        }
    } catch (error) {
        yield put(getAllPostsActions.getAllPostsFailure(error))
    }
}

export function* getAllPostsSaga() {
    yield takeLatest(getAllPostsTypes.GET_ALL_POSTS_REQUEST, getAllPostsSagas)
}
