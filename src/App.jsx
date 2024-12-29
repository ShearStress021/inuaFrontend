import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Programs from './pages/Programs'


function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([])

  const API = import.meta.env.VITE_API_URL

  const fetchApi = async () => {
    const response = await axios.get(`${API}/users`)
    console.log(response.data.users)
    setArray(response.data.users)
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about_us" element={<About />} />
      </Routes>

      {/* {

        array.map((name, index) =>
          <li key={index}>{name}</li>
        )
      } */}
      <Footer />

    </>
  )
}

export default App
