import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import './App.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </>
  )
}

export default App
