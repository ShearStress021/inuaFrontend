import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar'





function App() {
  const [count, setCount] = useState(0)

  const [array, setArray] = useState([])


  const API = import.meta.env.VITE_API_URL

  const fetchApi = async () => {
    const response = await axios.get(`${API}/users`)

    setArray(response.data.users)
  }

  useEffect(() => {
    fetchApi();
  }, [API])
  return (
    <div className="App">
      <Navbar />
      <ul>
        {
          array.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
