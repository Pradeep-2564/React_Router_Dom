import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Nav/Home';
import About from './Components/Nav/About';
import Dashboard from './Components/Nav/Dashboard';
import Navbar from './Components/Nav/Navbar';
import ParamComp from './Components/Nav/ParamComp';
import Courses from './Components/Nav/Courses';
import MockTest from './Components/Nav/MockTest';

const router = createBrowserRouter([
  { path: '/',
    element: 
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  { path: '/about',
    element: 
    <div>
      <Navbar/>
      <About/>
    </div>
  },
  { path: '/dashboard',
    element: 
    <div>
      <Navbar/>
      <Dashboard/>
    </div>,
    children: [
      {
        path: 'courses',
        element: <Courses/>
      },
      {
        path: 'mock-test',
        element: <MockTest/>
      },
    ]
  },
  { path: '/student/:id',
    element: 
    <div>
      <Navbar/>
      <ParamComp/>
    </div>
  },

]);


const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
