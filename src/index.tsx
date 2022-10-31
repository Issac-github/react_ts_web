import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import 'antd/dist/antd.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import HomeMenu from './views/Home/HomeMenu'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <div style={{ display: 'flex', width: '100%' }}>
        <HomeMenu />
        <RouterProvider router={router} />
      </div>
    </ChakraProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
