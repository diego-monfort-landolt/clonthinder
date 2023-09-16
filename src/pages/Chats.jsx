import React from 'react'
import ChatPrevisualicasion from '../pages/ChatPrevisualicasion'
import frau from '../images/frau.jpg'
import frau1 from '../images/frau1.jpg'
import frau2 from '../images/frau2.jpg'

const Chats = () => {
  return (
   <>
   <ChatPrevisualicasion 
   nombre= 'Ana'
   mensaje= 'Hola que Tal?'
   timestamp= '40seg'
   imgPerfil = {frau}
   />
   <ChatPrevisualicasion 
   nombre= 'Marta'
   mensaje= 'Hola que Tal?'
   timestamp= '5m'
   imgPerfil = {frau1}
   />
   <ChatPrevisualicasion 
   nombre= 'Claudia'
   mensaje= 'Quedamos?'
   timestamp= '2days ago'
   imgPerfil = {frau2}
   />


   </>
  )
}

export default Chats