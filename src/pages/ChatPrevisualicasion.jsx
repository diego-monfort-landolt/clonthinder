import React from 'react'
import '../stylesheet/ChatPrevisualicasion.css'
import { Link } from'react-router-dom'



const ChatPrevisualicasion = ({ nombre, mensaje, timestamp, imgPerfil }) => {
    return (
        <>
            <Link to={`/chat/${nombre}`}>
                <div className='ChatPrevisualicasion'>
                    <div className='chat_detalles'>
                        <img className='imgchat' src={imgPerfil} alt='perfil' />
                        <h2>{nombre}</h2>
                        <p>{mensaje}</p> 
                         <p>{timestamp}</p>
                    </div>
                  
                </div>
            </Link>



        </>
    )
}

export default ChatPrevisualicasion
