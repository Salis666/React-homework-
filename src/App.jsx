import { useState } from 'react';
import './App.css';
import { Message } from './Components/Message';
import { AddTextForm } from './Components/AddTextForm';
import { useEffect } from 'react';
import { ChatList } from './Components/ChatList'

export const App = () => {

  const [messageList, setMessageList] = useState([
    {
      text: 'Привет! Меня зовут Кристина. Как у вас дела?',
      autor: 'Kris'
    },
    {
      text: 'Привет, Кристина! Нормально, кошку кормлю, а у тебя?',
      autor: 'Alex'
    },
    {
      text: 'У меня все хорошо, как зовут кошку?',
      autor: 'Kris'
    },
  ])
  const [messageBody, setMessageBody] = useState({
    text: '',
    autor: ''
  })
  const robotText = 'Здравствуй путник! Я робот, давай поговорим?'
  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].autor != 'Робот Толян') {
      setTimeout(() => {
        setMessageList(p => [...p, { text: robotText, autor: 'Робот Толян' }], [messageList])
      }, 1500)
    }
  })

  return (
    <div className="App">
      <Message text="Hello World, this is new chat!" />
      <AddTextForm
        messageList={messageList}
        setMessageList={setMessageList}
        setMessageBody={setMessageBody}
        messageBody={messageBody}></AddTextForm>
      <div className='mainBox'>
        <ChatList></ChatList>
        <div className='messageBox'>
          {
            messageList.map((e, i) =>
              <div key={i} className='messageStyle'>
                <h4 className='text'>{e.text}</h4>
                <p className='autor'>Автор: {e.autor}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
