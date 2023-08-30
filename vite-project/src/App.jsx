import { useState } from 'react'
import Button from './components/button.jsx'
import Outcome from './components/outcome.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Praca domowa #1</h1>
      <div className="main">        
        <Button  />
        <Outcome count={count}/>
      </div>
    </>
  )
}

export default App
