//import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import HomeScreen from './components/HomeScreen';
import NavBar from './components/NavBar';
import Catalog from './components/Catalog';

interface Response {
  class1Name: string;
  class1Number: string;
  class2Name: string;
  class2Number: string;
  class3Name: string;
  class3Number: string;
  class4Name: string;
  class4Number: string;
}

function App() {
  const [response, setResponse] = useState<Response>({
    class1Name: "",     // E.g., Discete Structures
    class1Number: "",   // E.g., CS 0441
    class2Name: "",
    class2Number: "",
    class3Name: "",
    class3Number: "",
    class4Name: "",
    class4Number: "",
  });

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="" element={<HomeScreen setResp={ setResponse }/>} />
          <Route path="/classes" element={<Catalog resp={ response } setResp={ setResponse }/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
