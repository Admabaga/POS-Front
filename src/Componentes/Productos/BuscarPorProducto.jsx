import { Card, CardHeader, CardBody } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import TablaProducto from './TablaProductos';
import { useState, useContext } from 'react';
import TemaContexto from '../TemaContexto';

const productos = [
  { id: 1, nombreProducto: "Cerveza" },
  { id: 2, nombreProducto: "Whisky" },
  { id: 3, nombreProducto: "Vino" }
];

export default function BuscarProducto(){
    const [mostrarData, setMostrarData] = useState(false)
    const { tema } = useContext(TemaContexto)
    
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
      },

      {
        id: 2,
        name: "Whisky",
        productoPrecio: "Botella",
        category: "Licores",
        cantidad: "5",
        precioUnitario:'350000'
      },

      {
        id: 3,
        name: "Vino",
        productoPrecio: "Botella",
        category: "Licores",
        cantidad: "5",
        precioUnitario:'30000'
      }
    ];
    
    return(
    <Card>
      <CardHeader className={`${tema === 'light' ? 'light-mode' : ''}`}>Buscar producto</CardHeader>
      <CardBody className={`${tema === 'light' ? 'light-mode' : ''}`}>
        <FloatingLabel controlId="floatingSelect" label="Producto seleccionado:">
          <Form.Select className='mb-3'>
            <option>Elije una opción</option>
            {productos.map((producto) => (
              <option key={producto.id} value={producto.id}>{producto.nombreProducto}</option>
            ))}
          </Form.Select>
        </FloatingLabel>
        <Button variant="outline-primary" onClick={handleChange} className={`botones ${tema === 'light' ? 'light-mode' : ''}`}>Buscar</Button>
        {mostrarData && (
          <TablaProducto objects={objects}/>
        )}
      </CardBody>
    </Card>
    )
}