import React from 'react';
import ChatBot from 'react-simple-chatbot';
import icon from '../../media/helpdeskagent1.png';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import swlicon from '../../media/skypewontlaunch.png';
import scaicon from '../../media/skypechangeadd.png';
import mpicon from '../../media/mypassword.png';


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
          { value: 1, label: 'access MyPassword?', trigger: '18'},
          { value: 2, label: 'Change your enterprise ID password?', trigger: '20' },
          { value: 3, label: 'Change your security questions and/or contact preferences?', trigger: '22' },
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
    },
    {
    id: '18',
    message: 'Try this:',
    trigger: '17',
    },
    {
    id: '19',
    component: (
      <div className='ChatBotComponent'>
        <a href='https://mypassword.lmig.com/welcome/Start.aspx' target='_blank'><img src={mpicon} height="80px"></img></a>
    </div>
    ),
    trigger: '11',

    },
    {
    id: '20',
    message: 'Hm, I think I know what you\'re looking for',
    trigger: '21',
    },
    {
    id: '21',
    component: (
      <div className='ChatBotComponent'>
        <Link to='password/changepassword' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
    },
    {
    id: '22',
    message: 'Hm, I think I know what you\'re looking for',
    trigger: '23',
    },
    {
    id: '23',
    component: (
      <div className='ChatBotComponent'>
        <Link to='password/changepreferences' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
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
          botAvatar={icon}
          headerTitle={"Lee - Help Desk Agent"}/>
        </ThemeProvider>
      </div>
    );
  }
}
