import React from 'react';
import { Card} from 'react-bootstrap';
import TablaCategoria from './TablaCategorias';

export default function VerCategorias() {
    const objects = [
        {
          id: 1,
          nombreCategoria: "Limpeza",
          iva: "19%"
        },
        {
            id: 2,
            nombreCategoria: "Licor",
            iva: "19%"
        },
      ];
      
    return(
    <Card> 
        <Card.Header>Ver categorias</Card.Header>
        <Card.Body>
        <TablaCategoria objects={objects}/>
        </Card.Body>
    </Card>    
    )
}