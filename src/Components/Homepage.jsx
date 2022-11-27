import * as React from 'react';
import style from './Homepage.module.css'

export const Homepage = () => {
            return <div className={style.box}>
                        <div className={style.linklist}>
                                    <a className={style.linklistText} href="/">Домашняя страница</a>
                                    <a className={style.linklistText} href="/chatlist">Список чатов</a>
                                    <a className={style.linklistText} href="/profile">Профиль</a>
                        </div>
                        <div className={style.descriptionChat}>
                                    <h2 className={style.textDescription}>Добро пожаловать в наш любимый чат</h2>
                                    <p className={style.textDescription}>Здесь вы можете общаться со своими собеседниками, создавать конфереции и весело проводить время</p>
                        </div>

                        <img className={style.dog} src="https://picsum.photos/id/237/200/300" alt="img" />


            </div>
}