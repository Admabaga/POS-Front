import { Table } from 'react-bootstrap';

export default function TablaCategoria({objects}){
    const columns = ['ID', 'Nombre', 'Iva'];
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
                <td>{objeto.nombreCategoria}</td>
                <td>{objeto.iva}</td>
            </tr>
            ))}
        </tbody>
        </Table>
        </div>
    )
}