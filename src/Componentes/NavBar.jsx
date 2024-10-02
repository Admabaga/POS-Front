import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';

function Navegacion() {

  return (
    <section className='nav'>
    <Accordion defaultActiveKey="0">
    <Navbar >
        <Container>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Productos</Accordion.Header>
                <Accordion.Body>
                    <Nav.Link href='/productos/registroProductos'>Registrar </Nav.Link>
                    <Nav.Link href='/productos/verProductos'>Ver productos</Nav.Link>
                    <Nav.Link href='/productos/actualizarProductos'>Actualizar </Nav.Link>
                    <Nav.Link href='/productos/buscarProducto'>Buscar por producto</Nav.Link>
                </Accordion.Body>
            </Accordion.Item>

        </Container>
    </Navbar>
    <Navbar >
        <Container>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Categorias</Accordion.Header>
                <Accordion.Body>
                    <Nav.Link href=''>Registrar categoria</Nav.Link>
                    <Nav.Link href=''>Actualizar categoria</Nav.Link>
                    <Nav.Link href=''>Ver categorias</Nav.Link>
                </Accordion.Body>
        </Accordion.Item>
        </Container>
    </Navbar>
    <Navbar >
        <Container>
            <Accordion.Item eventKey="3">
            <Accordion.Header>Ventas</Accordion.Header>
                <Accordion.Body>
                    <Nav.Link >Separated link</Nav.Link>
                    <Nav.Link>Separated link</Nav.Link>
                </Accordion.Body>
            </Accordion.Item>
        </Container>
    </Navbar>
    <Navbar >
        <Container>
            <Accordion.Item eventKey="1" className='itemNav'>
                <Accordion.Header >Compras</Accordion.Header>
                    <Accordion.Body>
                        <Nav.Link href=''>Generar factura de compra</Nav.Link>
                        <Nav.Link href=''>Ver compras por factura</Nav.Link>
                        <Nav.Link href=''>Ver compras</Nav.Link>
                    </Accordion.Body>
                </Accordion.Item>
        </Container> 
    </Navbar>
    <Navbar >
        <Container>
            <Accordion.Item eventKey="5">
            <Accordion.Header>Ventas</Accordion.Header>
                <Accordion.Body>
                    <Nav.Link >Separated link</Nav.Link>
                    <Nav.Link >Separated link</Nav.Link>
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
