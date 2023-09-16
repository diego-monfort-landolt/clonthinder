import React, { useState } from 'react'
import '../stylesheet/tarjetas.css'
import TarjetaPersona from 'react-tinder-card';
import mann from '../images/mann.jpg'
import frau from '../images/frau.jpg'
import frau1 from '../images/frau1.jpg'
import frau2 from '../images/frau2.jpg'


const Tarjetas = () => {
  const [persona, setPerson] = useState(
    [
      {
        nombre: 'Juan',
        bild: mann,

      },
      {
        nombre: 'Sandra',
        bild: frau,

      },
      {
        nombre: 'Claudia',
        bild: frau1,

      },
      {
        nombre: 'Rahel',
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
            
          ))}
        </div>
      </div>
    </>
  )
}

export default Tarjetas