import { Table } from 'react-bootstrap';

export default function TablaProducto({objects}){
    const columns = ['ID', 'Nombre', 'Producto precio', 'Categoría', 'Cantidad','Precio unitario'];
    return(
        <div className="table-container">
        <Table className="custom-table">
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