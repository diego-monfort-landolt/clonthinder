import React, { useState } from 'react'
import '../stylesheet/tarjetas.css'
import TarjetaPersona from 'react-tinder-card';
import mann from '../images/mann.jpg'
import frau from '../images/frau.jpg'
import frau1 from '../images/frau1.jpg'
import frau2 from '../images/frau2.jpg'

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';



const Tarjetas = () => {
  const [persona, setPerson] = useState(
    [
      {
        nombre: 'Juan',
        old: 18,
        bild: mann,

      },
      {
        nombre: 'Sandra',
        old: 25,
        bild: frau,

      },
      {
        nombre: 'Claudia',
        old:35,
        bild: frau1,

      },
      {
        nombre: 'Rahel',
        old:19,
        bild: frau2,

      },
    ]
  )
  return (
    <>
      <div className="tarjetas">
        <div className="tarjetas__container">
          {persona.map(persona => (
            <TarjetaPersona 
            className='swipe'
            key={persona.name}
            preventSwipe={['up', 'down']}
            >
              <div className='tarjeta' style={{backgroundImage:`url(${persona.bild})`}}>
                <h2>{persona.nombre}</h2>
              </div>
             
             
 
            </TarjetaPersona> 

            
          ))} <div className='icons'>
                 <ReplayIcon fontSize='large' />
                    <CloseIcon className='x' fontSize='large' />
                        <StarOutlineIcon className='star' fontSize='large' />
                    <FavoriteIcon className='lov' fontSize='large' />
                <BoltSharpIcon fontSize='large' />
              </div>
        </div>
      </div>
      
    </>
  )
}

export default Tarjetas