import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    if (message.includes('hello') || message.includes('hi') || message.includes('hii') || message.includes('hey') ||message.includes('Hi') ){
      actions.handleHello();
    }

    else if (
      message.includes('Tell me about your website') ||
      message.includes('about website') ||
      message.includes('tell me about this website') ||
      message.includes('About website') ||
      message.includes('Your website') ||
      message.includes('your website') ||
      message.includes('Mission of website') ||
      message.includes('mission of website')||
      message.includes('what does this website do?')||
      message.includes('What does this website do?')||
      message.includes('What is The Travelogie?')||
      message.includes('What is travel?')||
      message.includes('what is Travel?')||
      message.includes('What is the travelogue?')||
      message.includes('What is Travelogue?')||
      message.includes('what is travelogue?')
    ){
      actions.websiteDetails();
    } 

    else if(
        message.includes('thanks')||
        message.includes('thank you')||
        message.includes('thanks a lot')||
        message.includes('thanks for help')||
        message.includes('Thanks')||
        message.includes('Thank You')
    ){
        actions.greeting();
    }

    else{
        actions.error();
    }
  } 

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;