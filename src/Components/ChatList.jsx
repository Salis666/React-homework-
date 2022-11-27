import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import style from './ChatList.module.css';
import chatListJsonFile from '../Jsons/chatlist.json'
import { useState } from 'react';


export const ChatList = (props) => {
            const chats = [{ name: 'Kris', id: 1 }, { name: 'Alex', id: 2 }, { name: 'Friends', id: 3 }];
            const [chatListJson, setchatListJson] = useState(chatListJsonFile)
            return (

                        <div className='box'>
                                    <div className={style.linklist}>
                                                <a className={style.linklistText} href="/">Домашняя страница</a>
                                                <a className={style.linklistText} href="/chatlist">Список чатов</a>
                                                <a className={style.linklistText} href="/profile">Профиль</a>
                                    </div>
                                    <div className={style.descriptionChat}>
                                                <h2 className={style.textDescription}>Добро пожаловать в наш любимый чат</h2>
                                                <p className={style.textDescription}>Здесь вы можете общаться со своими собеседниками, создавать конфереции и весело проводить время</p>
                                    </div>

                                    <List
                                                sx={{ width: '20%', maxWidth: 360, bgcolor: 'background' }}
                                                aria-label="contacts"
                                    >
                                                {
                                                            chatListJson.map((e, i) =>

                                                                        <a href={'chatlist/' + e.name} key={i}><ListItem disablePadding>
                                                                                    <ListItemButton>
                                                                                                <ListItemIcon>
                                                                                                            <StarIcon />
                                                                                                </ListItemIcon>
                                                                                                <ListItemText primary={e.name} />
                                                                                    </ListItemButton>
                                                                        </ListItem></a>

                                                            )
                                                }
                                    </List>


                        </div>



            );

}