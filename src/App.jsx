import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {
        array.map((name, index) => 
          <li key={index}>{name}</li>
        )
      }

    </>
  )
}

export default App
