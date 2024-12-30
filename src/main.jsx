import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import DaisyLogIn from './components/DaisyLogIn/DaisyLogIn';
import Signup from './components/Signup/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/daisyui",
        element: <DaisyLogIn></DaisyLogIn>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
