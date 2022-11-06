import style from './AddTextForm.module.css'

export const AddTextForm = (props) => {
            const { text, autor } = props.messageBody
            const addMessage = (e) => {
                        e.preventDefault()
                        if (text.length > 0) {
                                    props.setMessageList(p => [...p, { text, autor }])
                        }
                        props.setMessageBody(
                                    {
                                                text: '',
                                                autor: ''
                                    }
                        )
            }
            return <form className={style.inputTextForm} onSubmit={addMessage}>
                        <input className={style.inputText} type="text" value={text} placeholder='Please enter text' onChange={(e) =>
                                    props.setMessageBody(p => ({ ...p, text: e.target.value }))} />
                        <input className={style.inputText} type="text" value={autor} placeholder='Who are you?' onChange={(e) =>
                                    props.setMessageBody(p => ({ ...p, autor: e.target.value }))} />
                        <button className={style.buttonForm} type="submit">Submit</button>
            </form>
}