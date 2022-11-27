import * as React from 'react';
import style from './NotFound.module.css'
export const NotFound = () => {

            return <>
                        <div className={style.linklist}>
                                    <a className={style.linklistText} href="/">Домашняя страница</a>
                                    <a className={style.linklistText} href="/chatlist">Список чатов</a>
                                    <a className={style.linklistText} href="profile">Профиль</a>
                        </div>
                        <h1 className={style.text}>Page is not found!!!</h1></>
}