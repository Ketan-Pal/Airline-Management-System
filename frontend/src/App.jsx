import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Home} from "./pages/home";
import {Contact} from "./pages/contact";
import {Pnr} from "./pages/pnr";
import {Login} from "./pages/login";
import './App.css'
import { Navbar } from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pnr' element={<Pnr/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
