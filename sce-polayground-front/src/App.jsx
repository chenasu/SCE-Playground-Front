import { useState } from 'react'
import sceLogo from './assets/sce_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={sceLogo} className="logo" alt="sce logo" />
        </a>
      </div>
    </>
  )
}

export default App
