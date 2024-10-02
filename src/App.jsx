import  Navegacion  from './Componentes/NavBar.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header.jsx'
import ValoresContexto from './Componentes/Contexto.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistroProducto from './Componentes/Productos/ProductoRegistro.jsx'
import VerProductos from './Componentes/Productos/VerProductos.jsx';
import BuscarProducto from './Componentes/Productos/BuscarPorProducto.jsx';
import Footer from './Componentes/Footer.jsx'
import Notificaciones from './Componentes/Notificaciones.jsx';
import VerCategorias from './Componentes/Categorias/VerCategorias.jsx';
import RegistroCategoria from './Componentes/Categorias/RegistrarCategoria.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <section className='main'>
      <Navegacion/>
      <hr className="mb-4" />
      <BrowserRouter>
        <Routes>
          <Route path='/productos/registroProductos' element={<RegistroProducto/>}></Route>
          <Route path='/productos/verProductos' element={<VerProductos/>}></Route>
          <Route path='/productos/actualizarProductos' element={<RegistroProducto/>}></Route>
          <Route path='/productos/buscarProducto' element={<BuscarProducto/>}></Route>
          <Route path='/categorias/verCategorias' element={<VerCategorias/>}></Route>
          <Route path='/categorias/registarCategoria' element={<RegistroCategoria/>}></Route>
          <Route path='/categorias/actualizarCategoria' element={<VerCategorias/>}></Route>
        </Routes>
      </BrowserRouter>
      <Notificaciones/>
      </section>
      <Footer></Footer>
    </>

  )
}

export default App
