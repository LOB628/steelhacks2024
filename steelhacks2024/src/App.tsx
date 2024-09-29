//import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import HomeScreen from './components/HomeScreen';
import NavBar from './components/NavBar';
import Catalog from './components/Catalog';

function App() {
  const [response, setResponse] = useState('');

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="" element={<HomeScreen setResp={ setResponse }/>} />
          <Route path="/classes" element={<Catalog resp={ response }/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
