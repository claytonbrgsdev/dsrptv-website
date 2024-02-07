import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { Container } from '@mui/material'
import Footer from './Components/Footer/Footer.tsx'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container style={{ display: "flex" }} maxWidth="lg">
      <RouterProvider router={router} />
    </Container><br/>
    <Footer/>
  </React.StrictMode>,
)
