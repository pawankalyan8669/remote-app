import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Login from './pages/Login'

// Standalone view of the remote, so its pages can be developed without the host.
function App() {
  const [username, setUsername] = useState<string>()

  return (
    <>
      <h1>Remote App</h1>
      {username ? <About username={username} /> : <Login onLogin={setUsername} />}
    </>
  )
}

export default App
