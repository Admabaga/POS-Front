import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import { useContext, useState, useRef } from 'react'
import TemaContexto from '../TemaContexto';

export default function ActualizarProductos() {
  const { tema } = useContext(TemaContexto)
  const [nombreProducto, setNombreProducto] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState('')
  const [proveedor, setProveedor] = useState('')
  const [productoPrecio, setProductoPrecio] = useState('')
  const [idProducto, setIdProducto] = useState('')
  const inputRef = useRef(null)

  const limpiarYEnfocar = () => {
    setNombreProducto('')
    setCantidad('')
    setValor('')
    setCategoria('')
    setProveedor('')
    setProductoPrecio('')
    setIdProducto('')
    inputRef.current.focus()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    limpiarYEnfocar()
  }
    
  return (
    <Card>
      <Card.Header className={`${tema === 'light' ? 'light-mode' : ''}`}>
        Actualizar producto
      </Card.Header>
      <Card.Body className={`${tema === 'light' ? 'light-mode' : ''}`}>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingSelect" label="Producto a actualizar:">
            <Form.Select className='mb-3'
              value={idProducto}
              onChange={(e) => setIdProducto(e.target.value)}
            >
              <option>Elije una opción</option>
              {productos.map((producto) => (
                <option key={producto.id} value={producto.id}>{producto.nombreProducto}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <Form.Floating className="mb-3">
            <Form.Control
              type="text"
              value={nombreProducto}
              ref={inputRef}
              onChange={(e) => setNombreProducto(e.target.value)}
            />
            <label htmlFor="floatingInputCustom">Nombre </label>
          </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            type="number"
            value={cantidad}
            onChange={(cantidad)=>setCantidad(cantidad.target.value)}
          />
          <label htmlFor="floatingPasswordCustom">Cantidad</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
        <div className="input-group ">
            <span className="input-group-text">$</span>
            <Form.Control
            type="number"
            placeholder='Precio unitario'
            value={valor}
            onChange={(valor)=>setValor(valor.target.value)}
          />
          
        </div>
        </Form.Floating>
        <FloatingLabel controlId="floatingSelect" label="Categoria seleccionada:">
          <Form.Select className='mb-3'
            value={categoria}
            onChange={(categoria)=>setCategoria(categoria.target.value)}>
            <option>Elije una opción</option>
                {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>{categoria.nombreCategoria}</option>
                ))}
          </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Proveedor seleccionado:">
          <Form.Select className='mb-3'
          value={proveedor}
          onChange={(proveedor)=>setProveedor(proveedor.target.value)}
          >
          <option>Elije una opción</option>
            {proveedores.map((proveedor) => (
              <option key={proveedor.id} value={proveedor.id}>{proveedor.nombreProveedor}</option>
            ))}
          </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Producto precio seleccionado:">
          <Form.Select className='mb-3'
            value={productoPrecio}
            onChange={(productoPrecio)=>setProductoPrecio(productoPrecio.target.value)} >
          <option>Elije una opción</option>
            {productoPrecios.map((productoPrecio) => (
              <option key={productoPrecio.id} value={productoPrecio.id}>{productoPrecio.nombreProductoPrecio}</option>
            ))}
          </Form.Select>
      </FloatingLabel>
      <Button type='submit' className={`botones ${tema === 'light' ? 'light-mode' : ''}`}>Actualizar</Button>
      </Form>
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

const productos = [
    { id: 1, nombreProducto: 'Doritos' },
    { id: 2, nombreProducto: 'Leche' },
    { id: 3, nombreProducto: 'Vino' }
  ]