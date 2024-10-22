import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import TemaContexto from '../TemaContexto'
import { useContext, useState, useRef} from 'react'

export default function ActualizarCategoria() {
  const { tema } = useContext(TemaContexto)
  const [nombreCategoria, setNombreCategoria] = useState('')
  const [iva, setIva] = useState('')
  const [idCategoria, setIdCategoria] = useState("")
  const inputRef = useRef(null)
  const [errorNomCategoria, setErrorNomCategoria] = useState(false);
  const [errorIva,  setErrorIva] = useState(false);
  const [goodData,  setGoodData] = useState(false);
  const limpiarYEnfocar = () => {
    setNombreCategoria('')
    setIva('')
    inputRef.current.focus()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorNomCategoria(nombreCategoria  === '' ? true : false)
    setErrorIva(iva === '' ? true : false)
    
    
    if(nombreCategoria != '' && iva != ''){
      setGoodData(true)
      limpiarYEnfocar()
    }
    
    
  }

  return (
    <Card>
      <Card.Header className={`${tema === 'light' ? 'light-mode' : ''}`}>Actualizar categoria</Card.Header>
      <Card.Body className={`${tema === 'light' ? 'light-mode' : ''}`}>
      <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingSelect" label="Producto a actualizar:">
            <Form.Select className='mb-3'
            value={idCategoria}
            onChange={(idCategoria)=>setIdCategoria(idCategoria.target.value)}>
            <option>Elije una opción</option>
                {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>{categoria.nombreCategoria}</option>
                ))}
            </Form.Select>
        </FloatingLabel>
        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
            value={nombreCategoria}
            ref={inputRef}  
            onChange={(nombre)=>setNombreCategoria(nombre.target.value)}
          />
          <label htmlFor="floatingInputCustom">Nombre </label>
        </Form.Floating>
        <div className='menssageError'>
          {errorNomCategoria  && <span>El nombre ingresado no es valido</span> }
        </div>
        <Form.Floating className="mb-3">
          <Form.Control
            type="number"
            value={iva}
            onChange={(iva)=>setIva(iva.target.value)}
          />
          <label htmlFor="floatingPasswordCustom">Iva</label>
        </Form.Floating>
        <div className='menssageError'>
            {errorIva && <span>El valor del iva no es valido</span>}
        </div>
      <Button type='submit' variant="outline-primary" className={`botones ${tema === 'light' ? 'light-mode' : ''}`}>Actualizar</Button>
                <div className='goodMenssage'>
        {goodData && <p>Los datos ingresados son correctos</p>}
      </div>
      </Form>
      </Card.Body>
    </Card>
  );
}

const categorias = [
    { id: 1, nombreCategoria: 'Alimentacion' },
    { id: 2, nombreCategoria: 'Limpieza' },
    { id: 3, nombreCategoria: 'Electronica' }
  ]
