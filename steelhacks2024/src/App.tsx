//import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import NavBar from './components/NavBar';
import Catalog from './components/Catalog';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="" element={<HomeScreen />} />
          <Route path="/classes" element={<Catalog/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
