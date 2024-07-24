import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import '../styles/chat.css';

function ChatView() {
    const {publish, messages} = usePubSub('CHAT');
    const { localParticipant } = useMeeting();

    const [message, setMessage] = useState('');
    const handleMessage = () => {
        publish(message, {persist: true});
        setMessage('')
    }

    return (
    <div className="chat-view">
        <header className="chat-header">
            <span>Chat</span>
        </header>
        <div className="chat-messages">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.senderId === localParticipant.id ? 'self' : 'guest'}`}>
                    <span className="sender" >{msg.senderName}</span>
                    <span className="content">{msg.message}</span>
                </div>
            ))}
        </div>
        <div className="message-input">
        <InputText value={message} 
                   onChange={(e) => setMessage(e.target.value)} 
                   placeholder="Type a message..." />
        <Button className="p-button-rounded p-button-info join-btn" 
                onClick={() => handleMessage()}>
            <i className="pi pi-send"></i>
        </Button>
        </div>
    </div>
    )
}

export default ChatView