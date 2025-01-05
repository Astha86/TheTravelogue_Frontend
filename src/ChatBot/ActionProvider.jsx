import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleHello=() => {
    const message = createChatBotMessage('Hello , I am Travelogue ChatBot , Type your query..');
    updateState(message,handleHello);
  }

  const websiteDetails = () => {
    const message = createChatBotMessage('Travelogue is a website for the traveller who want to explore about the places.');
    updateState(message,websiteDetails);
  }

  const greeting=()=>{
    const message = createChatBotMessage('Happy to help you. Visit again to our webite. Thank You!!');
    updateState(message,greeting);
  }

  const error=()=>{
    const message = createChatBotMessage('I am sorry, I can only answer related to this website.');
    updateState(message,error);
  }

  return (
    <div>
        {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                actions: {
                    handleHello,
                    websiteDetails,
                    greeting,
                    error,
                },
            });
        })}
    </div>
   );
}; 

export default ActionProvider;