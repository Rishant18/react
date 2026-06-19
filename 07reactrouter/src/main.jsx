import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/user/User.jsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//            path:'about',
//         element: <About/>
//       },
//       {
//            path:'header',
//         element: <Header/>
//       },
//       {
//            path:'about',
//         element: <Footer/>
//       },
//        {
//            path:'contact',
//         element: <Contact/>
//       },
//        {
//            path:'github',
//         element: <Github/>
//       },
//     ]
//   }

// ])


 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
    <Route path='' element= {<Home/>}/>
    <Route path='about' element= {<About/>}/>
    <Route path='contact' element= {<Contact/>}/>
    <Route path='user/:userid' element= {<User/>}/>
     <Route loader={githubInfoLoader} path='github' element= {<Github/>}/>
    </Route>
   
  )
 )
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
