import { useState } from 'react';
import './App.css';
import { Message } from './Components/Message';

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
  const robotText = 'Привет, ${messageBody.autor}. Я робот, давай поговорим?'
  return (
    <div className="App">
      <Message text="Hello World, this is new chat!" />
      {
        messageList.map(e =>
          <div>
            <h4>Сообщение: {e.text}</h4>
            <p>Автор: {e.autor}</p>
          </div>
        )
      }
    </div>
  );
}
