import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import router from './routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gradient-to-r from-orange-100 to-stone-100'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>

)
