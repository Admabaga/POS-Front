import React from 'react';
import { Card} from 'react-bootstrap';
import TablaProducto from './TablaProductos'

function VerProductos() {
 
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
      name: "Cerveza",
      productoPrecio: "Cerveza personal",
      category: "Licores",
      cantidad: "25",
      precioUnitario:'3500'
    },
  ];
  
  return (
    <Card> 
        <Card.Header>Ver productos</Card.Header>
        <Card.Body>
        <TablaProducto objects={objects}/>
        </Card.Body>
    </Card>
  );
}

export default VerProductos;
