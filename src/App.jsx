import { useState } from 'react'
import './App.css'
import { Clock, Stopwatch } from './components'

export default function App() {
  const [mode, setMode] = useState(false)

  const toggleMode = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      setMode(!mode)
    }
  }

  return (
    <div className='Container' onClick={toggleMode}>
      {mode ? <Stopwatch /> : <Clock />}
    </div>
  )
}

