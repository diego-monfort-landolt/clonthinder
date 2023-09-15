import React from 'react';
import Header from './Headers';
import Tarjetas from './pages/Tarjetas';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
      <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route path="/chats">
              Esto son los Chats
            </Route>
            <Route path="/">
              <Tarjetas />
            </Route>
          </Routes>
        </Router>

      </div>






    </>
  )
}

export default App
