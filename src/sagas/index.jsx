import { fork, all, call, take } from 'redux-saga/effects'
import posts from './posts'
import comments from './comments'

export const takeFirst = (pattern, saga, ...args) =>
    fork(function* first() {
        while (true) {
            const action = yield take(pattern)
            yield call(saga, ...args.concat(action))
        }
    })

const sagas = [
    ...posts,
    ...comments
]

function* globalSagas() {
    const globalSagasForks = sagas.filter(saga => saga !== undefined).map(saga => fork(saga))
    yield all([...globalSagasForks])
}

export default globalSagas