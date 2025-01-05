import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from "../ChatAssistant/Avatar";
import UserAvatar from "../ChatAssistant/UserAvatar"
const config = {
    botName: "The Travelogue ChatBot",
    initialMessages: [createChatBotMessage(`Welcome to Travelogue! Explore our Website 🙌`)],
    customComponents:{
        botAvatar: (props) => <Avatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />,
        header: () => <div style={{ backgroundColor: 'rgba(230, 203, 153, 0.99)', 
        padding: "12px", 
        borderRadius: "3px",
        textAlign:"center" ,
        display:"flex" }}>
            Travelogue ChatBot
        </div>
    },
}
export default config;