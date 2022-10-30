import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes'


function App() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
