import { useState } from 'react';
import './App.css';
import { Message } from './Components/Message';
import { AddTextForm } from './Components/AddTextForm';
import { useEffect } from 'react';
import { ChatList } from './Components/ChatList'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from '@mui/icons-material';
import { NotFound } from './Components/NotFound';
import Conf from './Jsons/Conf.json'
import { ConfComp } from './Components/ConfComp'


export const App = () => {

  const [messageList, setMessageList] = useState(Conf);
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
        {/* <div className='messageBox'>
          {
            messageList.map((e, i) =>
              <div key={i} className='messageStyle'>
                <h4 className='text'>{e.text}</h4>
                <p className='autor'>Автор: {e.autor}</p>
              </div>
            )
          }
        </div> */}
      </div>
      <BrowserRouter>
        <ChatList></ChatList>

        <div>
          <Routes>
            <Route path='1' element={<ConfComp />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>


      </BrowserRouter>
    </div>
  );
}
