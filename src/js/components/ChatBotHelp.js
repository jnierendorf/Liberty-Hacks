import React from 'react';
import ChatBot from 'react-simple-chatbot';
import icon from '../../media/helpdeskagent1.png';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import swlicon from '../../media/skypewontlaunch.png';
import scaicon from '../../media/skypechangeadd.png';
import mpicon from '../../media/mypassword.png';
import sficon from '../../media/skypefaq.png';


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

const customersFirst = [


]


const steps = [
  {
        id: '1',
        message: 'Hi Ned! What can I help you with?',
        trigger: '2',
        trigger: 'customersFirst'
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'ID\'s & Passwords', trigger: '4' },
          { value: 2, label: 'RSA Tokens & VPN', trigger: '24' },
          { value: 3, label: 'Skype/Lync', trigger: '7' },
          { value: 4, label: 'Mobile Phones', trigger: '32' },
          { value: 5, label: 'Outlook', trigger: '42' },
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
        message: 'OK! How can I help you with Skype/Lync?',
        trigger: '8',
      },
      {
        id: '8',
        options: [
          { value: 1, label: 'I want to change or add a profile picture to Skype.', trigger: '16'},
          { value: 2, label: 'Skype doesn\'t launch when I turn on my computer.', trigger: '9' },
          { value: 3, label: 'Other', trigger: '40' },
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
    {
      id: '24',
      message: 'OK! How can I help you with RSA Tokens & VPN?',
      trigger: '25',
    },
    {
      id: '25',
      options: [
        { value: 1, label: 'I am unable to connect from a hotel or public Wifi', trigger: '26'},
        { value: 2, label: 'I want to connect to VPN using Pulse Secure', trigger: '28' },
        { value: 3, label: 'RSA VPN Troubleshooting', trigger: '30' },
      ],
    },
    {
    id: '26',
    message: 'Hm, I think I found something -',
    trigger: '27',
    },
    {
    id: '27',
    component: (
      <div className='ChatBotComponent'>
        <Link to='rsa/unabletoconnect' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
    },
    {
    id: '28',
    message: 'Hm, I think I found something -',
    trigger: '29',
    },
    {
    id: '29',
    component: (
      <div className='ChatBotComponent'>
        <Link to='rsa/vpnconnect' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
    },
    {
    id: '30',
    message: 'Hm, I think I found something -',
    trigger: '31',
    },
    {
    id: '31',
    component: (
      <div className='ChatBotComponent'>
        <Link to='rsa/vpntroubleshooting' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
    },
    {
      id: '32',
      message: 'OK! How can I help you with your mobile phone?',
      trigger: '33',
    },
    {
      id: '33',
      options: [
        { value: 1, label: 'Forgot secure apps passcode for my iPhone', trigger: '34'},
        { value: 2, label: 'I want to install/configure skype for business mobile on my iPhone', trigger: '36' },
        { value: 3, label: 'I want to install/configure skype for business mobile on android', trigger: '38' },
      ],
    },
    {
    id: '34',
    message: 'Hm, I think I found something -',
    trigger: '35',
    },
    {
    id: '35',
    component: (
      <div className='ChatBotComponent'>
        <Link to='phone/secure' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
    },
    {
    id: '36',
    message: 'Hm, I think I found something -',
    trigger: '37',
    },
    {
    id: '37',
    component: (
      <div className='ChatBotComponent'>
        <Link to='phone/skypeapple' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
    },
    {
    id: '38',
    message: 'Hm, I think I found something -',
    trigger: '39',
    },
    {
    id: '39',
    component: (
      <div className='ChatBotComponent'>
        <Link to='phone/skypeandroid' target="_blank"><img src={scaicon} height="80px"></img></Link>
    </div>
    ),
    trigger: '11',
    },
    {
    id: '40',
    message: 'Hm, give this a try -',
    trigger: '41',
    },
    {
    id: '41',
      component: (
        <div className='ChatBotComponent'>
          <a href='https://libertymutual-ss.rightanswers.com/portal/app/portlets/results/viewsolution.jsp?solutionid=151005105540188&SToken=20F998D7349E1C534B7695DA6E155ABF' target='_blank'><img src={sficon} height="80px"></img></a>
      </div>
      ),
    trigger: '11',
  },
  {
    id: '42',
    message: 'OK! How can I help you with Outlook?',
    trigger: '43',
  },
  {
    id: '43',
    options: [
      { value: 1, label: 'I want to change or add a profile picture to Outlook.', trigger: '44'},
      { value: 2, label: 'I want to turn on/off the Out of Office reply.', trigger: '46' },
      { value: 3, label: 'I need help with Voicemail in Outlook Research Center', trigger: '48' },
    ],
  },
  {
  id: '44',
  message: 'Ok, try this -',
  trigger: '45',
  },
  {
  id: '45',
  component: (
    <div className='ChatBotComponent'>
      <Link to='outlook/changeaddpic' target="_blank"><img src={scaicon} height="80px"></img></Link>
  </div>
  ),
  trigger: '11',
  },
  {
  id: '46',
  message: 'Hm, I think this is what you\'re looking for -',
  trigger: '47',
  },
  {
  id: '47',
  component: (
    <div className='ChatBotComponent'>
      <Link to='outlook/oooreply' target="_blank"><img src={scaicon} height="80px"></img></Link>
  </div>
  ),
  trigger: '11',
  },
  {
  id: '48',
  message: 'Give this a try -',
  trigger: '49',
  },
  {
  id: '49',
  component: (
    <div className='ChatBotComponent'>
      <a href='https://libertymutual-ss.rightanswers.com/portal/app/portlets/results/viewsolution.jsp?solutionid=120920131732435&SToken=001CFBAEFE9E3A1F6AAF32C14E0974E7' target='_blank'><img src={sficon} height="80px"></img></a>
  </div>
  ),
  trigger: '11',
  },
  {
  id: 'customersFirst',
  user: true,
  trigger: '50',
  },
  {
  id: '50',
  message: 'OK, I will connect you with a CustomersFirst support resource right now.',
  trigger: 'thankyou',
  },
  {
  id: 'thankyou',
  user: true,
  trigger:13,
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
