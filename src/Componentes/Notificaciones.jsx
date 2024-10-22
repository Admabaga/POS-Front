import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
export default function Notificaciones() {
     return(
        <section className='nav'>
        <Accordion defaultActiveKey="0">
       <Container>
            <Accordion.Item eventKey="1" className='itemNav'>
                <Accordion.Header >Notificaciones</Accordion.Header>
                    <Accordion.Body>
                        <p>hsfbuyfbads</p>
                    </Accordion.Body>
                </Accordion.Item>
        </Container>
        </Accordion>
        </section>
     )
    }