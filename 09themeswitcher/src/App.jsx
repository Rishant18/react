import { useState ,useEffect} from 'react'
import { Themeprovider } from './context/Theme'
import './App.css'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'


function App() {
  const [Thememode, setThememode] = useState("light")


  const lighttheme =()=>{
    setThememode("light")
  }
  const darktheme =()=>{
    setThememode("dark")
  }

 useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(Thememode)
  }, [Thememode])
  
  return (
   <Themeprovider value={{Thememode,lighttheme,darktheme }} >
           <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                       <Card/>
                  </div>
              </div>
            </div>
     </Themeprovider> 
  )
}

export default App
