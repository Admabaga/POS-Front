import React from 'react';
import { Card} from 'react-bootstrap';
import TablaProducto from './TablaProductos'
import {  useContext } from 'react'
import TemaContexto from '../TemaContexto';

function VerProductos() {
 const {tema} = useContext(TemaContexto)
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
      productoPrecio: "Botella ",
      category: "Licores",
      cantidad: "25",
      precioUnitario:'350000'
    },

    {
      id: 3,
      name: "Vino",
      productoPrecio: "Botella ",
      category: "Licores",
      cantidad: "25",
      precioUnitario:'30000'
    }
  ]
  
  return (
    <Card> 
        <Card.Header className={`${tema === 'light' ? 'light-mode' : ''}`}>Ver productos</Card.Header>
        <Card.Body className={`${tema === 'light' ? 'light-mode' : ''}`}>
        <TablaProducto objects={objects}/>
        </Card.Body>
    </Card>
  );
}

export default VerProductos;
