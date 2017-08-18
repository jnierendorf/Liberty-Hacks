import React from 'react';
import ChatBot from 'react-simple-chatbot';
import icon from '../../media/helpdeskagent.png';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';


const theme = {
  background: '#f5f8fb',
  fontfamily: 'Helvetica, sans-serif',
  headerBgColor: '#002663',
  headerFontColor: '#fff',
  botBubbleColor: '#002663',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
        id: '1',
        message: 'Hi user! What can I help you with?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Password', trigger: '4' },
          { value: 2, label: 'RSA Token', trigger: '6' },
          { value: 3, label: 'Skype', trigger: '7' },
        ],
      },
      {
        id: '3',
        message: 'ok.',
        trigger: '6',
      },
      {
        id: '4',
        message: 'OK! Do you need to:',
        trigger: '5',
      },
      {
        id: '5',
        options: [
          { value: 1, label: 'Reset your password?', trigger: '6'},
          { value: 2, label: 'Unlock your account?', trigger: '6' },
          { value: 3, label: 'Change security questions?', trigger: '6' },
        ],
      },
      {
        id: '6',
        message: 'OK! We\'ll be right on it!',
        end: true,
      },
      {
        id: '7',
        message: 'OK! How can I help you with Skype?',
        trigger: '8',
      },
      {
        id: '8',
        options: [
          { value: 1, label: 'I want to change or add a profile picture to Skype.', trigger: '6'},
          { value: 2, label: 'Skype doesn\'t launch when I turn on my computer.', trigger: '9' },
          { value: 3, label: 'Other', trigger: '6' },
        ],
      },
      {
      id: '9',
      message: 'Hm, I think I found something -',
      end: true,
      },
]

export default class ChatBotHelp extends React.Component {
  render() {
    return (
      <div class="ChatBotHelp">
        <ThemeProvider theme={theme}>
          <ChatBot floating={true}
          steps={steps}
          hideUserAvatar={true}
          botAvatar={icon}/>
        </ThemeProvider>
      </div>
    );
  }
}
