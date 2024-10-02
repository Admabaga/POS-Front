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
        </Routes>
      </BrowserRouter>
      </section>
      <Footer></Footer>
    </>

  )
}

export default App
