import { Table } from 'react-bootstrap';
import TemaContexto from '../TemaContexto';
import { useContext } from 'react';
export default function TablaCategoria({objects}){
    const { tema } = useContext(TemaContexto)
    const columns = ['ID', 'Nombre', 'Iva'];
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
                <td>{objeto.nombreCategoria}</td>
                <td>{objeto.iva}</td>
            </tr>
            ))}
        </tbody>
        </Table>
        </div>
    )
}