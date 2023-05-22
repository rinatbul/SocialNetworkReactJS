import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi Guys! I am learn React!', likesCount: 15},
                {id: 1, message: 'Well done! You are greate!', likesCount: 55},
                {id: 1, message: 'Well done! You are greate!', likesCount: 55}
            ],
            newPostText: 'it-kamasutra.com',
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How Are you!'},
                {id: 3, message: 'Im fine!'},
                {id: 4, message: 'Thank you'},
                {id: 5, message: 'Bure'}
            ],

            newMessageBody: '',

            dialogs: [
                {id: 1, name: 'Rinat'},
                {id: 2, name: 'Behruz'},
                {id: 3, name: 'Mamuka'},
                {id: 4, name: 'Dar'},
                {id: 5, name: 'Bure'}
            ],
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}




window.store = store;