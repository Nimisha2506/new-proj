import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import '../AppChat.css';

const projectID = '944116c3-cb0c-4f1b-9158-4276574f8b8a';   //secret 1234

const Teams = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
 // minorproject\src\components\Teams.js
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default Teams;
