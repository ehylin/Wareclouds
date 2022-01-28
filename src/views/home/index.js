import React, {Fragment,useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {Card, Container, Row,Col} from 'react-bootstrap';

const Home = () => {
    
    return(
        <Fragment>
            
            <div className="bg-img text-center pt-4 pb-4 mb-4">
            <Link to="/buscar" className="letter">Iniciar la búsqueda</Link>
            </div>
            <Container>
            <Row >
            <Col xs={12} md={6}>
            <Card>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/03/26/02/01/astronaut-4968983_960_720.jpg" height="428"/>
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            
            </Col>
            <Col xs={12} md={6}>
            <Card>
                <Card.Img variant="top" src="https://resizer.glanacion.com/resizer/TNcPiW8hv_qiQfpxAWzEFJu_kU0=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/LZLFVU4ENNHMFBYDCBDY2GCIIM.jpg" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>   
            </Col>
            </Row>           
            </Container>
        </Fragment>    
    )
}
export default Home;

