import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-xl'> tailwind Test</h1>
       <Card username="rishant" btntext="click me"/>
        <Card username="Chauhan" btntext=" visit"/>
       
    </>
  )
}

export default App
