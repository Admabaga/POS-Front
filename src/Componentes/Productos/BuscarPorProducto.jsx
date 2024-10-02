import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import TablaProducto from './TablaProductos';
import { useState } from 'react';


export default function BuscarProducto(){
    const [mostrarData, setMostrarData] = useState(false)
    
    const handleChange = () => {
        setMostrarData(!mostrarData);
    }
    const objects = [
      {
        id: 1,
        name: "Cerveza",
        productoPrecio: "Cerveza grande",
        category: "Licores",
        cantidad: "5",
        precioUnitario:'7500'
      }
    ];
    
    return(
        <Card> 
        <Card.Header>Buscar producto</Card.Header>
        <Card.Body>
        <FloatingLabel controlId="floatingSelect" label="Seleccion producto:">
          <Form.Select className='mb-3'>
            <option>Abrir para seleccionar menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
        <Button variant="outline-primary" onClick={()=>handleChange()} className='botones'>Buscar</Button>
        {mostrarData == true &&
         <TablaProducto objects={objects}/>}
        </Card.Body>
    </Card>
    )
}