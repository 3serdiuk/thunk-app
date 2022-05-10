import {
    POSTS_PENDING,
    POSTS_RESOLVED,
    POSTS_ERROR
} from '../constants.js';

const initialValue = {
    posts: [],
    isLoading: false
}

export const postsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case POSTS_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case POSTS_RESOLVED: {
            return {
                posts: action.data,
                isLoading: false
            }
        }
        case POSTS_ERROR: {
            return {
                ...state,
                isLoading: false
            }
        }

        default: {
            return state;
        }
    }
}