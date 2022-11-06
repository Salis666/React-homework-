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
            return <form className="inputTextForm" onSubmit={addMessage}>
                        <input type="text" value={text} onChange={(e) =>
                                    props.setMessageBody(p => ({ ...p, text: e.target.value }))} />
                        <input type="text" value={autor} onChange={(e) =>
                                    props.setMessageBody(p => ({ ...p, autor: e.target.value }))} />
                        <button type="submit">Submit</button>
            </form>
}