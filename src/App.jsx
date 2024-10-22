import  Navegacion  from './Componentes/NavBar.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Componentes/Header.jsx'
import {ProveerTema} from './Componentes/TemaContexto.jsx'
import { BrowserRouter} from 'react-router-dom'
import  Rutas  from './Componentes/Rutas/Rutas.jsx'
import Footer from './Componentes/Footer.jsx'


function App() {

  return (
    <>
    <ProveerTema>
      <Header></Header>
      <section className='main'>
      <Navegacion/>
      <BrowserRouter>
        <Rutas></Rutas>
      </BrowserRouter>
      </section>
      <Footer></Footer>
      </ProveerTema>
    </>

  )
}

export default App
