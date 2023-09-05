import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Bloco de criação das rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Aparelhos from './routes/Aparelhos.jsx';
import VisualizarAparelho from './routes/VisualizarAparelho.jsx';
import Error from './routes/Error.jsx';

const router = createBrowserRouter(
  [
    {path: '/',  element : <App />,
    errorElement: <Error/>,
    children:[
        { path: '/', element : <Home/>},
        { path: '/aparelhos', element : <Aparelhos/>},
        { path: '/visualizar/aparelho/:id', element : <VisualizarAparelho/>},
      ]
  }
 ]
)

//Bloco de criação das rotas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)