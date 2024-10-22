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
  const [errorNomProducto, setErrorNomProducto] = useState(false);
  const [errorValor,  setErrorValor] = useState(false);
  const [errorCantidad, setErrorCantidad] = useState(false)
  const [errorCategoria, setErrorCategoria] = useState (false)
  const [errorProeveedor, setErrorProeveedor] = useState(false)
  const [errorPrecio, setErrorPrecio] = useState(false)
  const [errorProducto, setErrorProducto] = useState(false)

  const [goodData,  setGoodData] = useState(false);

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
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorNomProducto(nombreProducto  === '' ? true : false)
    setErrorValor(valor === '' ? true : false)
    setErrorCantidad(cantidad === '' ? true : false)
    setErrorCategoria(categoria === '' ? true : false)
    setErrorProeveedor(proveedor === '' ? true : false)
    setErrorPrecio(productoPrecio === '' ? true : false)
    setErrorProducto(idProducto=== '' ? true : false)
    
    
    if(nombreProducto !== '' && valor !== '' && cantidad !== '' && categoria !== '' && proveedor !== '' && productoPrecio !== ''  && idProducto !== ''){

      setGoodData(true)
      limpiarYEnfocar()
    }
    
    
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
              <option value={''}>Elije una opción</option>
              {productos.map((producto) => (
                <option key={producto.id} value={producto.id}>{producto.nombreProducto}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <div className='menssageError'>
            {errorProducto && <span>El producto ingresado no es correcto</span>}
        </div>
          <Form.Floating className="mb-3">
          <Form.Control
            type="text"
            value={nombreProducto}
            ref={inputRef}
            onChange={(nombre)=>setNombreProducto(nombre.target.value)}
          />
          <label htmlFor="floatingInputCustom">Nombre </label>
        </Form.Floating>
        <div className='menssageError'>
          {errorNomProducto  && <span>El nombre ingresado no es valido</span> }
        </div>
        <Form.Floating className="mb-3">
          <Form.Control
            type="number"
            value={cantidad}
            onChange={(cantidad)=>setCantidad(cantidad.target.value)}
          />
          <label htmlFor="floatingPasswordCustom">Cantidad</label>
        </Form.Floating>
        <div className='menssageError'>
          {errorCantidad  && <span>La cantidad ingresada no es valida</span> }
        </div>
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
        <div className='menssageError'>
          {errorValor  && <span>El valor ingresado no es valido</span> }
        </div>
        <FloatingLabel controlId="floatingSelect" label="Categoria seleccionada:">
          <Form.Select className='mb-3'
            value={categoria}
            onChange={(categoria)=>setCategoria(categoria.target.value)}>
            <option value={''}>Elije una opción</option>
                {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>{categoria.nombreCategoria}</option>
                ))}
          </Form.Select>
      </FloatingLabel>
      <div className='menssageError'>
          {errorCategoria  && <span>La categoria ingresada no es valida</span> }
        </div>
      <FloatingLabel controlId="floatingSelect" label="Proveedor seleccionado:">
          <Form.Select className='mb-3'
          value={proveedor}
          onChange={(proveedor)=>setProveedor(proveedor.target.value)}
          >
          <option value={''}>Elije una opción</option>
            {proveedores.map((proveedor) => (
              <option  key={proveedor.id} value={proveedor.id}>{proveedor.nombreProveedor}</option>
            ))}
          </Form.Select>
      </FloatingLabel>
      <div className='menssageError'>
          {errorProeveedor  && <span>El proveedor ingresado no es valido</span> }
        </div>
      <FloatingLabel controlId="floatingSelect" label="Producto precio seleccionado:">
          <Form.Select className='mb-3'
            value={productoPrecio}
            onChange={(productoPrecio)=>setProductoPrecio(productoPrecio.target.value)} >
          <option value={''}>Elije una opción</option>
            {productoPrecios.map((productoPrecio) => (
              <option key={productoPrecio.id} value={productoPrecio.id}>{productoPrecio.nombreProductoPrecio}</option>
            ))}
          </Form.Select>
      </FloatingLabel>
      <div className='menssageError'>
          {errorPrecio  && <span>El precio ingresado  no es valido</span> }
        </div>
      <Button type='submit' className={`botones ${tema === 'light' ? 'light-mode' : ''}`}>Guardar</Button>
      <div className='goodMenssage'>
        {goodData && <p>Los datos ingresados son correctos</p>}
      </div>
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