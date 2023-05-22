const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi Guys! I am learn React!', likesCount: 15},
        {id: 1, message: 'Well done! You are greate!', likesCount: 55},
        {id: 1, message: 'Well done! You are greate!', likesCount: 55}
    ],
    newPostText: 'it-kamasutra.com',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts : [newPost,...state.posts],
                newPostText : ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newText
            }
        }
        default :
            return state;
    }

    return state;
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;