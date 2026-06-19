import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
