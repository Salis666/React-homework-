import { useState } from 'react';
import './App.css';
import { Message } from './Components/Message';
import { AddTextForm } from './Components/AddTextForm';
import { useEffect } from 'react';
import { ChatList } from './Components/ChatList'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NotFound } from './Components/NotFound';
import Conf from './Jsons/Conf.json'
import { ConfComp } from './Components/ConfComp'
import { Homepage } from './Components/Homepage';
import { Profile } from './Components/Profile';
import chatListJsonFile from './Jsons/chatlist.json';


export const App = () => {

  const [messageList, setMessageList] = useState(Conf);
  const [chatListJson, setchatListJson] = useState(chatListJsonFile)
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

        <div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/chatlist' element={<ChatList />}></Route>
            {
              chatListJson.map((e, i) =>
                <Route path={'/chatlist/' + e.name} element={<ConfComp chatid={i} />}></Route>
              )
            }
            <Route path='*' element={<NotFound />} />
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        </div>


      </BrowserRouter>
    </div>
  );
}
