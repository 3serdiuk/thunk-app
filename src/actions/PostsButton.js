import {
    POSTS_PENDING,
    POSTS_RESOLVED,
    POSTS_ERROR
} from '../constants.js';

const setPostsPending = () => ({ type: POSTS_PENDING });
const setPostsData = (data) => ({ type: POSTS_RESOLVED, data });
const setPostsError = () => ({ type: POSTS_ERROR });

export const getPosts = () => {
    return (dispatch) => {
        dispatch(setPostsPending());
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((payload) => dispatch(setPostsData(payload.slice(0, 30))))
        .catch(() => dispatch(setPostsError()));
    }
}