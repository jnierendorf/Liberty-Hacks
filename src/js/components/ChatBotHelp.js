import React from 'react';
import ChatBot from 'react-simple-chatbot';
import icon from '../../media/helpdeskagent1.png';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import swlicon from '../../media/skypewontlaunch.png';
import scaicon from '../../media/skypechangeadd.png';


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
          { value: 1, label: 'I want to change or add a profile picture to Skype.', trigger: '16'},
          { value: 2, label: 'Skype doesn\'t launch when I turn on my computer.', trigger: '9' },
          { value: 3, label: 'Other', trigger: '6' },
        ],
      },
      {
      id: '9',
      message: 'Hm, I think I found something -',
      trigger: '10',
      },
      {
      id: '10',
        component: (
          <div className='ChatBotComponent'>
            <Link to='skype/wontlaunch' target="_blank"><img src={swlicon} height="80px"></img></Link>
        </div>
        ),
      trigger: '11',
    },
    {
    id: '11',
    message: 'Did this resolve your issue?',
    trigger: '12',
    },
    {
    id: '12',
    options: [
      { value: 1, label: 'Yes. Thank you!', trigger: '13'},
      { value: 2, label: 'No', trigger: '15' },
    ],
    },
    {
    id: '13',
    message: 'My Pleasure! If you have any more questions please don\'t hesitate to ask.',
    trigger: '14',
    },
    {
    id: '14',
    options: [
      { value: 1, label: 'I have another question', trigger: '15'},
    ],
    },
    {
    id: '15',
    message: 'What can I help you with?',
    trigger: '2',
    },
    {
    id: '16',
    message: 'Hm, I think I know what you\'re looking for',
    trigger: '17',
    },
    {
    id: '17',
    component: (
      <div className='ChatBotComponent'>
        <Link to='skype/changeaddpic' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
    }
]

export default class ChatBotHelp extends React.Component {
  render() {
    return (
      <div class="ChatBotHelp">
        <ThemeProvider theme={theme}>
          <ChatBot floating={true}
          steps={steps}
          hideUserAvatar={true}
          botAvatar={icon}
          headerTitle={"Lee - Help Desk Agent"}/>
        </ThemeProvider>
      </div>
    );
  }
}
