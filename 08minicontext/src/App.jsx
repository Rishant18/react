import Login from './component/Login'
import Profile from './component/Profile'
import Usercontextprovider from './context/Usercontextprovider'
 

function App() {

  return(
    <Usercontextprovider>
              <h1> Context API</h1>

              <Login/>
              <Profile/>
    </Usercontextprovider>
  )
}

export default App
