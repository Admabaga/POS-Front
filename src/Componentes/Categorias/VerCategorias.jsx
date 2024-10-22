import React from 'react';
import { Card} from 'react-bootstrap';
import TablaCategoria from './TablaCategorias';
import TemaContexto from '../TemaContexto';
import { useContext } from 'react';

export default function VerCategorias() {
  const { tema } = useContext(TemaContexto)
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
        <Card.Header className={`${tema === 'light' ? 'light-mode' : ''}`}>Ver categorias</Card.Header>
        <Card.Body className={`${tema === 'light' ? 'light-mode' : ''}`}>
        <TablaCategoria objects={objects}/>
        </Card.Body>
    </Card>    
    )
}