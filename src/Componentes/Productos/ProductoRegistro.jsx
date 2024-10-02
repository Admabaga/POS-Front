import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'


export default function RegistroProducto() {
    
  return (
    <Card>
      <Card.Header>Registrar producto</Card.Header>
      <Card.Body>
        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
          />
          <label htmlFor="floatingInputCustom">Nombre </label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            type="number"
          />
          <label htmlFor="floatingPasswordCustom">Cantidad</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
        <div className="input-group ">
            <span className="input-group-text">$</span>
            <Form.Control
            type="number"
            placeholder='Precio unitario'
          />
          
        </div>
        </Form.Floating>
        <FloatingLabel controlId="floatingSelect" label="Categoria seleccionada:">
          <Form.Select className='mb-3'>
          <option>Elije una opción</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>{categoria.nombreCategoria}</option>
            ))}
          </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Proveedor seleccionado:">
          <Form.Select className='mb-3'>
          <option>Elije una opción</option>
            {proveedores.map((proveedor) => (
              <option key={proveedor.id} value={proveedor.id}>{proveedor.nombreProveedor}</option>
            ))}
          </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Producto precio seleccionado:">
          <Form.Select className='mb-3' >
          <option>Elije una opción</option>
            {productoPrecios.map((productoPrecio) => (
              <option key={productoPrecio.id} value={productoPrecio.id}>{productoPrecio.nombreProductoPrecio}</option>
            ))}
          </Form.Select>
      </FloatingLabel>
      <Button variant="outline-primary" className='botones'>Guardar</Button>
      </Card.Body>
    </Card>
    
  );
}

const proveedores = [
  { id: 1, nombreProveedor: 'Exito' },
  { id: 2, nombreProveedor: 'DistriLicores' },
  { id: 3, nombreProveedor: 'Zenu' }
]

const productoPrecios = [
  { id: 1, nombreProductoPrecio: 'Garrafa' },
  { id: 2, nombreProductoPrecio: 'Caja' },
  { id: 3, nombreProductoPrecio: 'Personal' }
]

const categorias = [
  { id: 1, nombreCategoria: 'Alimentacion' },
  { id: 2, nombreCategoria: 'Limpieza' },
  { id: 3, nombreCategoria: 'Electronica' }
]