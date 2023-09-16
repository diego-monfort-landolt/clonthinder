import React, {useState} from 'react'
import '../stylesheet/Chatindividual.css'
import frau from '../images/frau.jpg'
import { ResetTv } from '@mui/icons-material'


const Chatindividual = () => {

    const adminSend = (e) => {
        e.preventDefault()
        setMesseges([...messages,{messages:innput}])
        setInput('')

    }

    const [innput,setInput] = useState('');
    const [messages, setMesseges] = useState([
        {
            nombre: 'Claudia',
            image: frau,
            messages: 'Hola Guapo!!',
        },
        {
            nombre: 'Claudia',
            image: frau,
            messages: 'Quedamo para una birra?',
        },
        {
           
            messages: 'Hola, preciosa! quando quieras...',
        },
        {
            nombre: 'Claudia',
            image: frau,
            messages: 'en una hora?',
        },

        
    ]);
  return (
    <>
    <div className='chats'>
        <p className='chats_timestamp'>You got a match on 16.09.2023 </p>
        {messages.map(messages => (
            messages.nombre ? (
                
                <div className='chat_message'>
                    <img src={messages.image} alt='avatar' className='avatar'/>
                    <p className='textochat'>
                        {messages.messages}
                    </p>
                </div>

            ):(
                <div className='chat_message'>
                    <p className='textochatAW'>
                        {messages.messages}
                    </p>
                </div>

            )

        ))}
    </div>
    <form className='chatInput'>
        <input className='input' value={innput} onChange={ e => setInput(e.target.value)}  placeholder='Hello how are you...' />
        <button onClick={adminSend} type='submit' className='chatBtn' >Send</button>
    </form>
    
    
    </>
  )
}

export default Chatindividual