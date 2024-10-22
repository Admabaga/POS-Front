import logoVenta from '../assets/iconoVenta.png'
import { useContext } from 'react'
import TemaContexto from './TemaContexto'
import { Button } from 'react-bootstrap'
 function Header(){
    const { tema, cambiarTema } = useContext(TemaContexto)
    return(
        <>
        <div className="header">
                <img src={logoVenta} alt=""/>
            <Button variant="outline-primary"
                className={`botones ${tema === 'light' ? 'light-mode' : ''} tema`}
                 onClick={cambiarTema}>
                Cambiar tema</Button>
        </div>
        <hr className="mb-4" />
        </>
    )
}

export default Header