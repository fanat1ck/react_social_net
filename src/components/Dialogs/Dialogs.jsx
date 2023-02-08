import React from "react";
import UserDialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import UserMessage from "./Messages/Messages";


const Dialogs = (props) => {
    const user = props.messagePage.userData.map(u =>
        <UserDialogItem key={u.id} name={u.name} id={u.id}/>);
    const message = props.messagePage.messageData.map(m =>
        <UserMessage key={m.id} message={m.message}/>);
    let element = React.createRef();
    let addMassage = () => props.addMassage();
    let updateMassage = () => {
        let text = element.current.value;
        props.updateMassage(text);
    };
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialog}>{user}</div>
                <div className={s.messages}>{message}
                    <textarea placeholder={'Enter your text'}
                              onChange={updateMassage}
                              value={props.messagePage.newMessage}
                              ref={element}>
                    </textarea>
                    <button onClick={addMassage}>Send</button>
                </div>
            </div>

        </div>
    );

}

export default Dialogs;
