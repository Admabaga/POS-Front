import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'
import { useContext } from 'react'
import TemaContexto from './TemaContexto'


function Navegacion() {
    const { tema} = useContext(TemaContexto)
  return (
    <section className={`nav ${tema === 'light' ? 'light-mode' : ''}`}>
      <Accordion defaultActiveKey="0">
      <Navbar>
          <Container>
            <Accordion.Item eventKey="4">
              <Accordion.Header >Menu</Accordion.Header>
              <Accordion.Body>
                <Nav.Link href="/">Ir al inicio</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Container>
        </Navbar>
        <Navbar>
          <Container>
            <Accordion.Item eventKey="1">
              <Accordion.Header className={`${tema === 'light' ? 'light-mode' : ''}`}>Categorias</Accordion.Header>
              <Accordion.Body>
                <Nav.Link href="/categorias/registarCategoria">Registrar categoria</Nav.Link>
                <Nav.Link href="/categorias/actualizarCategoria">Actualizar categoria</Nav.Link>
                <Nav.Link href="/categorias/verCategorias">Ver categorias</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Container>
        </Navbar>
        {/*
        <Navbar>
          <Container>
            <Accordion.Item eventKey="2" className="itemNav">
              <Accordion.Header>Compras</Accordion.Header>
              <Accordion.Body>
                <Nav.Link href="#">Generar factura de compra</Nav.Link>
                <Nav.Link href="#">Ver compras por factura</Nav.Link>
                <Nav.Link href="#">Ver compras</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Container>
        </Navbar>
        */}
        <Navbar>
          <Container>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Productos</Accordion.Header>
              <Accordion.Body>
                <Nav.Link href="/productos/registroProductos">Registrar</Nav.Link>
                <Nav.Link href="/productos/verProductos">Ver productos</Nav.Link>
                <Nav.Link href="/productos/actualizarProductos">Actualizar</Nav.Link>
                <Nav.Link href="/productos/buscarProducto">Buscar por producto</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Container>
        </Navbar>

      </Accordion>

      <hr className="mb-4" />
    </section>
  );
}

export default Navegacion;
