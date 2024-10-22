import { Table } from 'react-bootstrap';
import {  useContext } from 'react'
import TemaContexto from '../TemaContexto';
export default function TablaProducto({objects}){
    const {tema } = useContext(TemaContexto);
    const columns = ['ID', 'Nombre', 'Producto precio', 'Categoría', 'Cantidad','Precio unitario'];
    return(
        <div className="table-container">
        <Table className={`custom-table ${tema === 'light' ? 'light-mode' : ''}`}>
        <thead>
            <tr>
            {columns.map((column, index) => (
                <th key={index}>{column}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {objects.map((objeto, index) => (
            <tr key={index}>
                <td>{objeto.id}</td>
                <td>{objeto.name}</td>
                <td>{objeto.productoPrecio}</td>
                <td>{objeto.category}</td>
                <td>{objeto.cantidad}</td>
                <td>{objeto.precioUnitario}</td>
            </tr>
            ))}
        </tbody>
        </Table>
        </div>
    )
}