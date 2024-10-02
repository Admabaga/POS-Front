import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function RegistroCategoria() {
    
  return (
    <Card>
      <Card.Header>Registrar categoria</Card.Header>
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
          <label htmlFor="floatingPasswordCustom">Iva</label>
        </Form.Floating>
      <Button variant="outline-primary" className='botones'>Guardar</Button>
      </Card.Body>
    </Card>
  );
}
