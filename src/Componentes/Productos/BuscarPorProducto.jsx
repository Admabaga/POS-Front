import { Card, CardHeader, CardBody } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import TablaProducto from './TablaProductos';
import { useState } from 'react';


const productos = [
  { id: 1, nombreProducto: "Cerveza" },
  { id: 2, nombreProducto: "Vino" },
  { id: 3, nombreProducto: "Whisky" }
];

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
      <CardHeader>Buscar producto</CardHeader>
      <CardBody>
        <FloatingLabel controlId="floatingSelect" label="Producto seleccionado:">
          <Form.Select className='mb-3'>
            <option>Elije una opción</option>
            {productos.map((producto) => (
              <option key={producto.id} value={producto.id}>{producto.nombreProducto}</option>
            ))}
          </Form.Select>
        </FloatingLabel>
        <Button variant="outline-primary" onClick={handleChange} className='botones'>Buscar</Button>
        {mostrarData && (
          <TablaProducto objects={objects}/>
        )}
      </CardBody>
    </Card>
    )
}