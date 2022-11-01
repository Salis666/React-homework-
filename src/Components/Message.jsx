import style from './Message.module.sass'

export const Message = (props) => {
	return <><h1 className={style.text}> {props.text}</h1> </>



}