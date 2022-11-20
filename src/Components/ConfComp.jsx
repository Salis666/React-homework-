
import * as React from 'react';
import { useState } from 'react';
import Conf from '../Jsons/Conf.json'

export const ConfComp = () => {
            const [messageList, setMessageList] = useState(Conf);
            return <>
                        <h1>Писька рваная</h1>
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