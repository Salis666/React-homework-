import style from './AddTextForm.module.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { useEffect } from 'react';
import { useRef } from 'react';

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
            const ref = useRef(null);
            console.log(ref)
            useEffect(() => {
                        ref.current.focus()
            }, [props.messageList])
            return <form className={style.inputTextForm} onSubmit={addMessage}>
                        <textarea className={style.inputText} ref={ref} id="standard-basic" label="Text" variant="standard" onChange={(e) =>
                                    props.setMessageBody(p => ({ ...p, text: e.target.value }))} />
                        <TextField id="standard-basic" label="Nikname" variant="standard" onChange={(e) =>
                                    props.setMessageBody(p => ({ ...p, autor: e.target.value }))} />
                        <Button type='submit' variant="contained">Send</Button>
            </form>
}