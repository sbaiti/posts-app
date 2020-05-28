import Posts from '../containers/posts'
import ListCommentsPost from "../containers/comments"
import AddComment from "../components/addComment"

const loadableComponents = [
    {
        component: Posts,
        path: '/posts',
        exact: true,
        name: 'posts',
    },
    {
        component: ListCommentsPost,
        path: "/post/:id/comments",
        exact: true,
        name: "list-comments"
    },
    {
        component: AddComment,
        path: "/addComment/:id",
        exact: true,
        name: "add-comment"
    }
]

export default loadableComponents
