export const AddTextForm = (messageBody, setMessageBody, setMessageList) => {
            const { text, autor } = messageBody
            const addMessage = (e) => {
                        e.preventDefault()
                        if (text.length > 0) {
                                    setMessageList(p => [...p, { text, autor }])
                        }
                        setMessageBody(
                                    {
                                                text: '',
                                                autor: ''
                                    }
                        )
            }
            return <form className="inputTextForm" onSubmit={addMessage}>
                        <input type="text" value={text} onChange={(e) =>
                                    setMessageBody(p => ({ ...p, text: e.target.value }))} />
                        <input type="text" value={autor} onChange={(e) =>
                                    setMessageBody(p => ({ ...p, autor: e.target.value }))} />
                        <button type="submit">Submit</button>
            </form>
}