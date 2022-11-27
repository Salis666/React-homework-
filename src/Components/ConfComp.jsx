
import * as React from 'react';
import { useState } from 'react';
import Conf from '../Jsons/chatlist.json'
import { AddTextForm } from '../Components/AddTextForm';
import style from './ChatList.module.css';


export const ConfComp = ({ chatid }) => {
            const [messageList, setMessageList] = useState(Conf[chatid].chat);
            const [messageBody, setMessageBody] = useState({
                        text: '',
                        autor: ''
            })
            return <>
                        <div className={style.linklist}>
                                    <a className={style.linklistText} href="/">Домашняя страница</a>
                                    <a className={style.linklistText} href="/chatlist">Список чатов</a>
                                    <a className={style.linklistText} href="/profile">Профиль</a>
                        </div>
                        <AddTextForm
                                    messageList={messageList}
                                    setMessageList={setMessageList}
                                    setMessageBody={setMessageBody}
                                    messageBody={messageBody}>
                        </AddTextForm>
                        {
                                    messageList.map((e, i) =>
                                                <div key={i} className='messageStyle'>
                                                            <h4 className='text'>{e.text}</h4>
                                                            <p className='autor'>Автор: {e.autor}</p>
                                                </div>
                                    )
                        }
            </>
}