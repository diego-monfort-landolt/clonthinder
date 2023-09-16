import React from 'react';
import Header from './Headers';
import Tarjetas from './pages/Tarjetas';
import UserAcount from './pages/UserAcount';
import Chats from './pages/Chats';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chatindividual from './pages/Chatindividual';






function App() {


  return (
    <>
      <div className='app'>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/user' element={<UserAcount />} />
            <Route path='/chats' element={<Chats />} />
            <Route path='/' element={<Tarjetas /> } />
            <Route path='/chat/:persona' element={<Chatindividual />} />
          </Routes>
        </BrowserRouter>

        



      </div >






    </>
  )
}

export default App
