import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message messages={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text)
    }
    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )


}
