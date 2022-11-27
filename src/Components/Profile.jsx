import * as React from 'react';
import style from './Profile.module.css'

export const Profile = () => {
            return <>
                        <div className={style.linklist}>
                                    <a className={style.linklistText} href="/">Домашняя страница</a>
                                    <a className={style.linklistText} href="/chatlist">Список чатов</a>
                                    <a className={style.linklistText} href="/profile">Профиль</a>
                        </div>
                        <div className={style.box}>
                                    <img src='../icons/avatar.png' alt="avatar" />
                                    <h1>Описание профиля</h1>
                                    <p>Ник: Pipka</p>
                        </div>
            </>
}