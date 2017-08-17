import React from 'react';
import ChatBot from 'react-simple-chatbot';
import '../../css/components/ChatBotHelp.css';
import { ThemeProvider } from 'styled-components';


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
          { value: 2, label: 'RSA Token', trigger: '3' },
          { value: 3, label: 'Skype', trigger: '3' },
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
]

export default class ChatBotHelp extends React.Component {
  render() {
    return (
      <div class="ChatBotHelp">
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} />
        </ThemeProvider>
      </div>
    );
  }
}
