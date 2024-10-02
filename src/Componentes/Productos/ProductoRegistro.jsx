import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'


export default function RegistroProducto() {
    
  return (
    <Card>
      <Card.Header>Registrar producto</Card.Header>
      <Card.Body>
        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
          />
          <label htmlFor="floatingInputCustom">Nombre </label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            type="number"
          />
          <label htmlFor="floatingPasswordCustom">Cantidad</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
        <div className="input-group ">
            <span className="input-group-text">$</span>
            <Form.Control
            type="number"
            placeholder='Precio unitario'
          />
          
        </div>
        </Form.Floating>
        <FloatingLabel controlId="floatingSelect" label="Categoria seleccionada:">
          <Form.Select className='mb-3'>
            <option>Abrir para seleccionar menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Proveedor seleccionado:">
          <Form.Select className='mb-3'>
            <option>Abrir para seleccionar menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Producto precio seleccionado:">
          <Form.Select className='mb-3' >
            <option>Abrir para seleccionar menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
      </FloatingLabel>
      <Button variant="outline-primary" className='botones'>Guardar</Button>
      </Card.Body>
    </Card>
    
  );
}
