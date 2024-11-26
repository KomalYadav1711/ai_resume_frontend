import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth'

import Dashboard from './dashboard'
import { ClerkProvider } from '@clerk/clerk-react'

import Home from './home'
import EditResume from './dashboard/resume/[resumeId]'
import ViewResume from './my-resume'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
    
    element: <App/>,
    children:[
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/dashboard/resume/:resumeid/edit',
        element: <EditResume/>
      }

    ]
  },
  {
    path: '/',
    element: <Home/>

  },
  {
    path: '/auth/sign-in',
    element: <SignInPage/>
  },
  {
    path: '/my-resume/:resumeid/view',
    element: <ViewResume/>
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
  </ClerkProvider>
  
   
  </StrictMode>,
)
