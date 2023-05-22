import profileReducer from "./profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY :
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state,
                newMessageBody : '',
                messages:[...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;