import {Routes, Route } from 'react-router-dom'
import VerCategorias from '../Categorias/VerCategorias.jsx'
import RegistroCategoria from '../Categorias/RegistrarCategoria.jsx'
import Home from '../Home.jsx'
import ActualizarProductos from '../Productos/ActualizarProducto.jsx'
import ActualizarCategoria from '../Categorias/ActualizarCategoria.jsx'
import RegistroProducto from '../Productos/ProductoRegistro.jsx'
import VerProductos from '../Productos/VerProductos.jsx'
import BuscarProducto from '../Productos/BuscarPorProducto.jsx'
export default function Rutas (){
    return(
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productos/registroProductos' element={<RegistroProducto/>}></Route>
        <Route path='/productos/verProductos' element={<VerProductos/>}></Route>
        <Route path='/productos/actualizarProductos' element={<ActualizarProductos/>}></Route>
        <Route path='/productos/buscarProducto' element={<BuscarProducto/>}></Route>
        <Route path='/categorias/verCategorias' element={<VerCategorias/>}></Route>
        <Route path='/categorias/registarCategoria' element={<RegistroCategoria/>}></Route>
        <Route path='/categorias/actualizarCategoria' element={<ActualizarCategoria/>}></Route>
      </Routes>
    )
}