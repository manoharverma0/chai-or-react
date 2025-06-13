import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Layout from './layout'
import ContactUs from './components/Contact/ContactUs'
import Github , { githubInfo } from './components/GitHub/Github.jsx' 
import User from './components/User/User'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element: <ContactUs/>
//       }
//     ]
//    }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout/>}> 
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<ContactUs/>} />
      <Route path='user/:id' element={<User/>} />
      <Route path='github' element={<Github/>} loader={githubInfo} />
      

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
