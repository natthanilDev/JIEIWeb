import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './index'
import About from './about/about'
import Menu1 from './menu1/menu1'
import None404 from './404/404'
import Contact from './contact/contact'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const location = createHashRouter([
  {
    path : '/',
    element : <Index />,
    errorElement : <None404 />
  }, {
    path : '/about',
    element : <About />,
  
  },
   {
    path : '/menu1',
    element : <Menu1 />,
    
  },{
    path : '/contact',
    element : <Contact />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={location} />
  </StrictMode>,
)
