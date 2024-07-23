import { usePubSub } from "@videosdk.live/react-sdk";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import '../styles/chat.css';

function ChatView() {
    const {publish, messages} = usePubSub('CHAT');

    const [message, setMessage] = useState('');
    console.log(messages)
    const handleMessage = () => {
        publish(message, {persist: true});
        setMessage('')
    }

    return (
        <div className="chat-container">
            <p>Messages: </p>
            {[].map((msg: any) => {
                return (
                    <p key={msg.id}>{msg.senderName} says {msg.message}</p>
                )
            })}
            <div className="chat__actions">
            <InputText value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Meeting Code" />
            <Button label="Join/Create Meeting" className="p-button-rounded p-button-info join-btn" onClick={() => handleMessage()}/>
            </div>
        </div>
    )
}

export default ChatView