import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Bloco de criação das rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import VisualizarProduto from './routes/VisualizarProduto.jsx';
import Error from './routes/Error.jsx';

const router = createBrowserRouter(
  [
    {path: '/',  element : <App />,
    errorElement: <Error/>,
    children:[
        { path: '/', element : <Home/>},
        { path: '/produtos', element : <Produtos/>},
        { path: '/visualizar/produto/:id', element : <VisualizarProduto/>},
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