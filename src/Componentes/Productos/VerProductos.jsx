import React from 'react';
import { Card} from 'react-bootstrap';
import TablaProducto from './TablaProductos'

function VerProductos() {
 
  const objects = [
    {
      id: 1,
      name: "Cerveza",
      description: "Descripción cerveza",
      category: "Licores",
      cantidad: "5"
    },
    {
      id: 2,
      name: "Doritos",
      description: "Descripción doritos",
      category: "Mecato",
      cantidad: "20"
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
