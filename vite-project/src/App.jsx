import { useState } from 'react'
import Button from './components/Button.jsx'
import Outcome from './components/Outcome.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Praca domowa #1</h1>
      <div className="main">
        
        <Button onClick={() => setCount((count) => count + 1)}/>
        <Outcome />
          Edit <code>src/App.jsx</code> and save to test HMR
      </div>
    </>
  )
}

export default App
